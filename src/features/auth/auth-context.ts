import { createContext, useContext } from "react";
import type { User } from "@supabase/supabase-js";

type AuthContextValue = {
  user: User | null;
  configured: boolean;
  busy: boolean;
  error: string | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<boolean>;
};
export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth requer AuthProvider");
  return value;
}
