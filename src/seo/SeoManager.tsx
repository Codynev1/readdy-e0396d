import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoByPath, defaultSeo, type RouteSeo } from './seoData';
import { absoluteUrl, LOGO_URL } from './site';

// Keep exactly one managed tag per name/property/rel: reuse an existing tag when
// present, otherwise create it. This guarantees metadata never leaks between routes.
function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo: RouteSeo = seoByPath[pathname] || defaultSeo;
    const url = absoluteUrl(seo.path);

    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'keywords', seo.keywords);
    upsertLink('canonical', url);

    // Open Graph
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', seo.ogType || 'website');
    upsertMeta('property', 'og:site_name', 'NevTech AI');
    upsertMeta('property', 'og:image', LOGO_URL);

    // Twitter Card
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', LOGO_URL);
  }, [pathname]);

  return null;
}