// Central site URL + asset helpers for runtime SEO (JSON-LD, canonical, OG).
// The real production origin is provided at build time via VITE_SITE_URL.
// We only fall back to the project's existing domain when the env var is absent.
export const SITE_URL = (
  (import.meta.env.VITE_SITE_URL as string | undefined) || 'https://nevtech.ai'
).replace(/\/+$/, '');

// Existing absolute asset already used across the project (NevTech AI logo).
export const LOGO_URL =
  'https://static.readdy.ai/image/1bc91b7d55091cd3d488a2b17839859a/f8906f871ec7444a62120ab3c50f3b70.png';

export function absoluteUrl(path: string): string {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
  return `${SITE_URL}${clean === '/' ? '/' : clean}`;
}