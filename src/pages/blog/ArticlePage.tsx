import { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { supabase } from '@/lib/supabase';
import type { BlogPost } from '@/pages/blog/page';

function formatDate(value: string | null) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

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

  useEffect(() => {
    if (post) {
      document.title = post.title;
    }
    return () => {};
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background-50">
        <Header />
        <div className="flex items-center justify-center py-40">
          <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-background-50">
        <Header />
        <div className="flex flex-col items-center justify-center py-40 px-4 text-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-900 mb-4">
            <i className="ri-file-search-line text-2xl"></i>
          </div>
          <p className="text-foreground-900 font-semibold text-lg mb-1">Article not found</p>
          <p className="text-foreground-600 text-sm mb-6">The post you&apos;re looking for doesn&apos;t exist or isn&apos;t published yet.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-primary-500 text-background-50 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background-50">
        <Header />
        <div className="flex flex-col items-center justify-center py-40 px-4 text-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-900 mb-4">
            <i className="ri-cloud-off-line text-2xl"></i>
          </div>
          <p className="text-foreground-900 font-semibold mb-1">We couldn&apos;t load this post.</p>
          <p className="text-foreground-600 text-sm mb-5">Please try again in a moment.</p>
          <button
            onClick={load}
            className="inline-flex items-center gap-2 bg-primary-500 text-background-50 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-refresh-line"></i>
            Retry
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const tags: string[] = Array.isArray(post.tags) ? post.tags : [];

  return (
    <div className="min-h-screen bg-background-50">
      <Header />
      <main>
        {/* Article hero */}
        <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-32 pb-14 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto">
              <nav className="flex flex-wrap items-center gap-2 text-sm text-foreground-600 mb-6">
                <Link to="/" className="hover:text-foreground-950 transition-colors cursor-pointer whitespace-nowrap">
                  Home
                </Link>
                <i className="ri-arrow-right-s-line"></i>
                <Link to="/blog" className="hover:text-foreground-950 transition-colors cursor-pointer whitespace-nowrap">
                  Blog
                </Link>
                <i className="ri-arrow-right-s-line"></i>
                <span className="text-foreground-900 font-medium line-clamp-1">{post.title}</span>
              </nav>

              {post.category && (
                <div className="inline-flex items-center gap-1 bg-primary-100/80 text-primary-800 px-3 py-1.5 rounded-full text-sm font-semibold mb-5 whitespace-nowrap">
                  {post.category}
                </div>
              )}

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground-600">
                {post.author && (
                  <span className="font-semibold text-foreground-900">{post.author}</span>
                )}
                {post.author_title && (
                  <>
                    <span className="hidden sm:inline text-foreground-300">|</span>
                    <span>{post.author_title}</span>
                  </>
                )}
                <span className="hidden sm:inline text-foreground-300">|</span>
                <span className="inline-flex items-center gap-1 whitespace-nowrap">
                  <i className="ri-calendar-line"></i>
                  {formatDate(post.published_at || post.created_at)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="py-14 md:py-16 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {post.cover_image && (
                <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-10 bg-background-200">
                  <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.body }} />

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-background-200">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 bg-secondary-100 text-secondary-900 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      <i className="ri-price-tag-3-line"></i>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Back to blog */}
        <section className="py-14 bg-gradient-to-br from-background-50 via-primary-50/20 to-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 p-6 bg-background-100 border border-background-200 rounded-xl">
              <div>
                <div className="text-foreground-900 font-bold text-lg mb-1">Want to build software this way?</div>
                <p className="text-sm text-foreground-700">
                  Talk to the NevTech team about a fixed-price MVP in two to six weeks.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary-500 text-background-50 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Book a scoping call
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center gap-2 border border-foreground-200 text-foreground-900 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-arrow-left-line"></i>
                  All posts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}