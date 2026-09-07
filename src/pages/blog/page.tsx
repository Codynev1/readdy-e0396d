import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { DaylightPage } from '@/components/daylight';
import { supabase } from '@/lib/supabase';
import { posts as staticPosts, order as staticOrder } from '@/data/blogPosts';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  meta_description: string | null;
  body: string;
  author: string | null;
  author_title: string | null;
  category: string | null;
  tags: string[];
  cover_image: string | null;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

function formatDate(value: string | null) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function excerpt(post: BlogPost): string {
  if (post.meta_description && post.meta_description.trim()) return post.meta_description.trim();
  const text = post.body
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > 160 ? `${text.slice(0, 160)}…` : text;
}

/* Normalised card model shared by Supabase rows and the static fallback posts. */
type CardPost = {
  key: string;
  to: string;
  cover: string | null;
  meta: string;
  title: string;
  excerpt: string;
  byline: string;
};

type StaticPost = { title: string; category: string; date: string; author: string; read: string; excerpt: string };

function readTime(body: string): string {
  const words = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min`;
}

function fromSupabase(post: BlogPost): CardPost {
  const meta = [post.category, readTime(post.body)].filter(Boolean).join(' · ');
  return {
    key: `db-${post.id}`,
    to: `/blog/${post.slug}`,
    cover: post.cover_image,
    meta,
    title: post.title,
    excerpt: excerpt(post),
    byline: `${post.author || 'NevTech'} · ${formatDate(post.published_at || post.created_at)}`,
  };
}

function fromStatic(key: string): CardPost {
  const p = (staticPosts as Record<string, StaticPost>)[key];
  return {
    key: `static-${key}`,
    to: `/blog/${key}`,
    cover: null,
    meta: `${p.category} · ${p.read}`,
    title: p.title,
    excerpt: p.excerpt,
    byline: `${p.author} · ${p.date}`,
  };
}

const serif = "Georgia,'Times New Roman',serif";
const mono = "'Courier New',monospace";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const load = useCallback(() => {
    setLoading(true);
    setError(false);
    supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .then(({ data, error: err }) => {
        setPosts(err ? [] : ((data as BlogPost[]) || []));
        if (err) setError(true);
      })
      .catch(() => {
        setPosts([]);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Fall back to the static posts whenever Supabase errors or returns nothing.
  const cards: CardPost[] = !loading && !error && posts && posts.length > 0
    ? posts.map(fromSupabase)
    : (staticOrder as string[]).map(fromStatic);

  return (
    <DaylightPage title="Blog — NevTech AI">
      {/* Blog hero */}
      <section className="dl-hero">
        <p className="dl-eyebrow">//01 NevTech blog</p>
        <h1>Ideas from the<br /><em>AI-native software team.</em></h1>
        <p className="dl-lede">Practical notes on AI, automation, and connectivity for businesses that would rather ship than speculate.</p>
      </section>

      {/* Articles */}
      <section style={{ padding: '60px 6% 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 12 }}>
        {cards.map((c) => (
          <Link key={c.key} to={c.to} className="dl-x-post-card">
            {c.cover ? (
              <img src={c.cover} alt="" style={{ aspectRatio: '16/9', width: '100%', objectFit: 'cover', borderRadius: 4, display: 'block' }} />
            ) : (
              <span style={{ aspectRatio: '16/9', borderRadius: 4, background: 'repeating-linear-gradient(135deg,#e2ebdf 0 12px,#d6e2d2 12px 24px)', display: 'grid', placeItems: 'center', font: `10px ${mono}`, color: '#55745d', textTransform: 'uppercase', letterSpacing: 1 }}>Cover image</span>
            )}
            <span style={{ font: `10px ${mono}`, letterSpacing: 1, color: '#07806a', textTransform: 'uppercase' }}>{c.meta}</span>
            <span style={{ font: `normal 24px/1.15 ${serif}`, letterSpacing: -0.6 }}>{c.title}</span>
            <span style={{ fontSize: 13, color: '#5a705f', lineHeight: 1.7 }}>{c.excerpt}</span>
            <span style={{ fontSize: 11, color: '#55745d', borderTop: '1px solid #173c2a22', paddingTop: 12, marginTop: 'auto' }}>{c.byline}</span>
          </Link>
        ))}
      </section>
    </DaylightPage>
  );
}
