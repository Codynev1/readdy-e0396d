# NevTech AI — nevtech.ai

React 19 + Vite 7 + React Router 7 + TypeScript. The "door" redesign: a dark entrance homepage whose door opens onto daylight as you scroll, and a light daylight system for every inner page.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # outputs to out/
npm run preview
```

Environment: copy `.env.example` to `.env` and fill in `VITE_PUBLIC_SUPABASE_URL` and `VITE_PUBLIC_SUPABASE_ANON_KEY` (used by the blog). Optional `VITE_SITE_URL` for canonical/OG URLs.

## Where things live

- `src/pages/home/page.tsx` — homepage, including the scroll-driven door animation (ported from the design spec, runs in a `useEffect` with full cleanup; honors `prefers-reduced-motion`).
- `src/styles/home.css` — homepage CSS (verbatim from the design). `src/styles/site.css` — daylight tokens, light header, footer, and the `dl-*` component kit.
- `src/components/feature/Header.tsx`, `Footer.tsx` — shared chrome (dark variant on `/`, light everywhere else).
- `src/components/daylight/index.tsx` — page kit: `DaylightPage`, `Hero`, `Section`, `SectionHead`, `Card`, `Check`, `Btn`, `Stats`, `Process`, `CtaBand`, `Faq`, `Placeholder`, `LeadForm`.
- `src/pages/**/page.tsx` — one folder per route (paths unchanged in `src/router/config.tsx`).
- Templated pages: `src/pages/seo/SeoLandingPage.tsx` + `src/data/seoPages.ts` (16 local-SEO routes), `src/pages/legal/LegalPage.tsx` + `src/data/legalPages.ts`, `src/pages/blog/*` + `src/data/blogPosts.ts` (Supabase `blog_posts` first, static posts as fallback).
- `public/assets/door-*.jpg` — the four door photographs.

## Launch checklist

- **Forms** (`/contact`, `/receptionist`, `/get-leads`, `/intake-form`) post to a placeholder. Pass `endpoint="https://…"` to each `LeadForm` (LeadConnector/webhook) — search for `<LeadForm` to find them.
- **Placeholder images**: founder photo (`/about`), VMS + Catalyst screenshots (`/products`), blog cover images. Search for `<Placeholder`.
- Footer social URLs (`src/components/feature/Footer.tsx`) — X and Facebook are placeholders.
- `og-image.svg` / `favicon.svg` in `public/` are simple generated marks; swap for real brand files when ready.
- Analytics (gtag) and the LeadConnector chat widget remain in `index.html`.
