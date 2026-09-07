import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY as string;

// A custom lock with a timeout cap prevents cross-tab lock contention from
// ever freezing the page (a known Supabase JS SDK issue).
function customLock(name: string, timeout = 10000) {
  if (!('navigator' in globalThis) || typeof navigator.locks === 'undefined') {
    return {
      acquire: async () => {
        let release = () => {};
        const p = new Promise<void>((resolve) => {
          release = resolve;
        });
        return { release, locked: p };
      },
    };
  }

  return {
    acquire: async () => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeout);
      try {
        const lock = await navigator.locks.request(name, { signal: controller.signal }, async () => {
          let release = () => {};
          const locked = new Promise<void>((resolve) => {
            release = resolve;
          });
          return { release, locked };
        });
        return lock;
      } finally {
        clearTimeout(timer);
      }
    },
  };
}

const lock = customLock('sb_global_lock', 10000);

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  global: { lock },
});