import { useEffect, useState, useCallback, ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DaylightPage } from '@/components/daylight';
import { supabase } from '@/lib/supabase';
import type { BlogPost } from '@/pages/blog/page';
import { posts as staticPosts, order as staticOrder } from '@/data/blogPosts';

function formatDate(value: string | null) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

type StaticPost = {
  title: string;
  category: string;
  date: string;
  author: string;
  read: string;
  excerpt: string;
  body: { h?: string; p?: string }[];
};

const staticMap = staticPosts as Record<string, StaticPost>;
const staticKeys = staticOrder as string[];

type ArticleModel = {
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  read: string;
  body: ReactNode;
  more: { href: string; title: string; category: string }[];
};

const serif = "Georgia,'Times New Roman',serif";
const mono = "'Courier New',monospace";

function moreFor(excludeKey: string) {
  return staticKeys.filter((k) => k !== excludeKey).slice(0, 3).map((k) => ({ href: `/blog/${k}`, title: staticMap[k].title, category: staticMap[k].category }));
}

function readTime(body: string): string {
  const words = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min`;
}

function modelFromStatic(key: string): ArticleModel {
  const p = staticMap[key];
  return {
    title: p.title,
    category: p.category,
    excerpt: p.excerpt,
    author: p.author,
    date: p.date,
    read: p.read,
    body: p.body.map((b, i) => b.h
      ? <h2 key={i} style={{ font: `normal 30px/1.15 ${serif}`, letterSpacing: -0.8, marginTop: 18 }}>{b.h}</h2>
      : <p key={i} style={{ fontSize: 17, lineHeight: 1.85, color: '#2c4a3a' }}>{b.p}</p>),
    more: moreFor(key),
  };
}

function modelFromSupabase(post: BlogPost): ArticleModel {
  const text = post.body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const excerpt = post.meta_description && post.meta_description.trim() ? post.meta_description.trim() : (text.length > 160 ? `${text.slice(0, 160)}…` : text);
  return {
    title: post.title,
    category: post.category || 'Blog',
    excerpt,
    author: post.author || 'NevTech',
    date: formatDate(post.published_at || post.created_at),
    read: readTime(post.body),
    body: <div className="dl-x-article-html" dangerouslySetInnerHTML={{ __html: post.body }} />,
    more: moreFor(post.slug),
  };
}

/* ---------- Article template (blog-article.dc.html) ---------- */
function ArticleView({ a }: { a: ArticleModel }) {
  return (
    <DaylightPage title={`${a.title} — NevTech AI`}>
      <article>
        {/* Article header */}
        <header style={{ padding: '80px 6% 48px', borderBottom: '1px solid #173c2a22' }}>
          <Link to="/blog" className="dl-eyebrow" style={{ textDecoration: 'none' }}>← Blog / {a.category}</Link>
          <h1 style={{ font: `normal clamp(38px,4.6vw,70px)/1.05 ${serif}`, letterSpacing: -2, margin: '18px 0 22px', maxWidth: 960 }}>{a.title}</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: '#566d5f', maxWidth: 640 }}>{a.excerpt}</p>
          <p style={{ font: `10px/1.9 ${mono}`, textTransform: 'uppercase', letterSpacing: 1, color: '#55745d', marginTop: 26 }}>{a.author} · {a.date} · {a.read} read</p>
        </header>

        {/* Article body */}
        <div style={{ padding: '56px 6% 80px', display: 'grid', gridTemplateColumns: 'minmax(0,720px)', justifyContent: 'start', gap: 22 }}>
          {a.body}
          <div style={{ marginTop: 30, borderTop: '1px solid #173c2a22', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, alignItems: 'center' }}>
            <p style={{ fontSize: 13, color: '#566d5f' }}>Written by {a.author}, Founder of NevTech AI, Indianapolis.</p>
            <Link to="/contact" className="dl-btn" style={{ padding: '12px 18px', minHeight: 0 }}>Talk to us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </article>

      {/* More */}
      <section style={{ padding: '50px 6% 70px', borderTop: '1px solid #173c2a22', background: '#e8efe0' }}>
        <p className="dl-eyebrow" style={{ marginBottom: 18 }}>Keep reading</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 12 }}>
          {a.more.map((m) => (
            <Link key={m.href} to={m.href} className="dl-x-more-card">
              <span style={{ font: `10px ${mono}`, letterSpacing: 1, color: '#07806a', textTransform: 'uppercase' }}>{m.category}</span>
              <span style={{ font: `normal 21px/1.2 ${serif}`, letterSpacing: -0.5 }}>{m.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </DaylightPage>
  );
}

/* ---------- Static article (dedicated routes) ---------- */
export function StaticArticle({ postKey }: { postKey: string }) {
  const key = staticMap[postKey] ? postKey : staticKeys[0];
  return <ArticleView a={modelFromStatic(key)} />;
}

/* ---------- /blog/:slug ---------- */
export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const load = useCallback(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(false);
    setNotFound(false);
    setPost(null);
    supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .maybeSingle()
      .then(({ data, error: err }) => {
        if (err) {
          setError(true);
          return;
        }
        if (!data) {
          setNotFound(true);
          return;
        }
        setPost(data as BlogPost);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    load();
  }, [load]);

  if (loading) {
    return (
      <DaylightPage title="Article — NevTech AI">
        <section className="dl-hero">
          <p className="dl-eyebrow">// Loading</p>
          <p className="dl-lede" style={{ marginTop: 16 }}>Loading article…</p>
        </section>
      </DaylightPage>
    );
  }

  if (post) return <ArticleView a={modelFromSupabase(post)} />;

  // No Supabase row (not found, or error) — fall back to the static posts.
  if ((notFound || error) && slug && staticMap[slug]) return <ArticleView a={modelFromStatic(slug)} />;

  return (
    <DaylightPage title="Article not found — NevTech AI">
      <section className="dl-hero">
        <p className="dl-eyebrow">// Blog</p>
        <h1>Article<br /><em>not found.</em></h1>
        <p className="dl-lede">The post you’re looking for doesn’t exist or isn’t published yet.</p>
        <div className="dl-actions">
          <Link className="dl-btn" to="/blog">Back to blog <span aria-hidden="true">↗</span></Link>
          {error && <button type="button" className="dl-btn ghost" onClick={load}>Retry</button>}
        </div>
      </section>
    </DaylightPage>
  );
}
