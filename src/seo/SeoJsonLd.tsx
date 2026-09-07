import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { schemaByPath } from './seoData';

// Injects per-route Schema.org JSON-LD. Kept intentionally separate from the
// runtime <head> meta manager so JSON-LD is never bundled with OG/Twitter mutation.
// Existing inline schema in page components is preserved (those routes return []).
export default function SeoJsonLd() {
  const { pathname } = useLocation();

  useEffect(() => {
    const schemas = schemaByPath[pathname];
    if (!schemas || schemas.length === 0) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-jsonld', 'true');
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((el) => el.remove());
    };
  }, [pathname]);

  return null;
}