import { createClient } from 'npm:@supabase/supabase-js@2';

// This endpoint lets an external AI agent (or any trusted system) publish
// articles to the site's blog. It is NOT guarded by Supabase JWTs; instead it
// requires a shared secret token supplied via the Authorization header, so a
// third-party AI tool that cannot mint JWTs can still call it safely.
const WRITE_TOKEN = Deno.env.get('BLOG_WRITE_TOKEN') ?? '';
const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed. Use POST.' }, 405);
  }

  // 1. Authenticate the caller via a shared secret token.
  const auth = req.headers.get('Authorization') ?? '';
  const token = auth.replace(/^Bearer\s+/i, '').trim();
  if (!WRITE_TOKEN || token !== WRITE_TOKEN) {
    return json({ error: 'Unauthorized. A valid Bearer token is required.' }, 401);
  }

  // 2. Parse and validate the payload.
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return json({ error: 'Request body must be valid JSON.' }, 400);
  }

  const title = typeof payload.title === 'string' ? payload.title.trim() : '';
  const rawBody = typeof payload.body === 'string' ? payload.body.trim() : '';
  if (!title) return json({ error: 'Field "title" is required.' }, 400);
  if (!rawBody) return json({ error: 'Field "body" is required.' }, 400);

  let slug = typeof payload.slug === 'string' && payload.slug.trim() ? payload.slug.trim() : slugify(title);
  slug = slugify(slug);

  const meta_description =
    typeof payload.meta_description === 'string' && payload.meta_description.trim()
      ? payload.meta_description.trim()
      : null;
  const author = typeof payload.author === 'string' && payload.author.trim() ? payload.author.trim() : 'Cody Neville';
  const author_title =
    typeof payload.author_title === 'string' && payload.author_title.trim()
      ? payload.author_title.trim()
      : 'Founder & CEO, NevTech';
  const category =
    typeof payload.category === 'string' && payload.category.trim() ? payload.category.trim() : 'Blog';
  const tags = Array.isArray(payload.tags) ? payload.tags.filter((t) => typeof t === 'string') : [];
  const cover_image =
    typeof payload.cover_image === 'string' && payload.cover_image.trim() ? payload.cover_image.trim() : null;
  const status = payload.status === 'draft' ? 'draft' : 'published';
  const published_at =
    typeof payload.published_at === 'string' && payload.published_at
      ? new Date(payload.published_at).toISOString()
      : new Date().toISOString();

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false },
  });

  const record = {
    title,
    slug,
    meta_description,
    body: rawBody,
    author,
    author_title,
    category,
    tags,
    cover_image,
    status,
    published_at,
    updated_at: new Date().toISOString(),
  };

  // 3. Upsert: update if the slug already exists, otherwise create a new row.
  const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', slug).maybeSingle();

  let result;
  if (existing) {
    result = await supabase.from('blog_posts').update(record).eq('id', existing.id).select('id, slug, title, status, published_at').single();
  } else {
    result = await supabase.from('blog_posts').insert(record).select('id, slug, title, status, published_at').single();
  }

  if (result.error) {
    return json({ error: `Failed to save post: ${result.error.message}` }, 500);
  }

  const action = existing ? 'updated' : 'created';
  return json({
    success: true,
    action,
    post: result.data,
    // Convenience preview / edit links shown to the calling agent.
    listingUrl: '/blog',
    articleUrl: `/blog/${result.data.slug}`,
  }, 200, corsHeaders);
});

function json(body: unknown, status = 200, extraHeaders?: Record<string, string>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
      ...(extraHeaders ?? {}),
    },
  });
}
