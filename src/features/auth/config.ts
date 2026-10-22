export const AUTH_PROJECT_URL = "https://uprbptqpgrhunbaaowib.supabase.co";

export function validateAuthConfig(url?: string, key?: string) {
  if (url?.replace(/\/$/, "") !== AUTH_PROJECT_URL || !key) return { valid: false };
  if (key.startsWith("sb_publishable_") && key.length > 15) return { valid: true };
  // Legacy anon keys remain supported; privileged keys must never reach the client.
  try {
    const payload = JSON.parse(atob(key.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    return { valid: payload.role === "anon" };
  } catch {
    return { valid: false };
  }
}
