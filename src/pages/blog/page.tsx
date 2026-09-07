import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { supabase } from '@/lib/supabase';

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

  return (
    <div className="min-h-screen bg-background-50">
      <Header />
      <main>
        {/* Blog hero */}
        <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-32 pb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-100/80 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <i className="ri-article-line"></i>
                NevTech Blog
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight mb-6">
                Ideas from the AI-Native Software Team
              </h1>
              <p className="text-lg md:text-xl text-foreground-700 leading-relaxed max-w-2xl mx-auto">
                How we build custom software and AI automation for small and mid-sized businesses — straight from the
                Indianapolis-based team at NevTech.
              </p>
            </div>
          </div>
        </section>

        {/* Blog listing */}
        <section className="py-16 md:py-20 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {loading && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
                <p className="text-foreground-600">Loading posts…</p>
              </div>
            )}

            {!loading && error && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-900 mb-4">
                  <i className="ri-cloud-off-line text-2xl"></i>
                </div>
                <p className="text-foreground-900 font-semibold mb-1">We couldn&apos;t load the blog right now.</p>
                <p className="text-foreground-600 text-sm mb-5">Please try again in a moment.</p>
                <button
                  onClick={load}
                  className="inline-flex items-center gap-2 bg-primary-500 text-background-50 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-refresh-line"></i>
                  Retry
                </button>
              </div>
            )}

            {!loading && !error && posts && posts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-900 mb-4">
                  <i className="ri-edit-2-line text-2xl"></i>
                </div>
                <p className="text-foreground-900 font-semibold mb-1">No posts published yet.</p>
                <p className="text-foreground-600 text-sm">Check back soon — new articles are on the way.</p>
              </div>
            )}

            {!loading && !error && posts && posts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group flex flex-col bg-background-100 border border-background-200 rounded-lg overflow-hidden hover:border-primary-300 transition-colors cursor-pointer"
                  >
                    {post.cover_image ? (
                      <div className="w-full h-44 overflow-hidden bg-background-200">
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-44 flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                        <i className="ri-code-box-line text-4xl text-primary-600/50"></i>
                      </div>
                    )}

                    <div className="flex flex-col flex-1 p-5">
                      {post.category && (
                        <div className="inline-flex items-center gap-1 bg-secondary-100 text-secondary-900 text-xs font-medium px-2.5 py-1 rounded-full mb-3 self-start whitespace-nowrap">
                          {post.category}
                        </div>
                      )}
                      <h3 className="text-base font-bold text-foreground-950 leading-snug mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-foreground-700 leading-relaxed line-clamp-3 mb-4">
                        {excerpt(post)}
                      </p>
                      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 text-xs text-foreground-600 pt-3 border-t border-background-200">
                        <span className="font-medium text-foreground-800 whitespace-nowrap">
                          {post.author || 'NevTech'}
                        </span>
                        <span className="inline-flex items-center gap-1 whitespace-nowrap">
                          <i className="ri-calendar-line"></i>
                          {formatDate(post.published_at || post.created_at)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}