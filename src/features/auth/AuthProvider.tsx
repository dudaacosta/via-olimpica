import { AuthContext } from "./auth-context";
import { useEffect, useState, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { getSupabase } from "@/lib/supabase";
import { switchStudyAccount } from "./studyAccount";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [configured, setConfigured] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [storageError, setStorageError] = useState<string | null>(null);
  const [accountVersion, setAccountVersion] = useState(0);

  useEffect(() => {
    let active = true;
    let ticket = 0;
    let currentId: string | null | undefined;
    let requestedId: string | null | undefined;
    let queue = Promise.resolve();
    const client = getSupabase();
    setConfigured(!!client);

    function acceptUser(nextUser: User | null) {
      if (!active) return;
      const id = nextUser?.id ?? null;
      if (requestedId === id) {
        if (currentId === id) setUser(nextUser);
        return;
      }
      requestedId = id;
      const request = ++ticket;
      // Hide children before scheduling any storage change, including cross-tab logout.
      setReady(false);
      queue = queue.then(async () => {
        if (!active || request !== ticket) return;
        try {
          await switchStudyAccount(id);
          if (!active || request !== ticket) return;
          currentId = id;
          setUser(nextUser);
          setAccountVersion((v) => v + 1);
          setStorageError(null);
          setReady(true);
          setBusy(false);
        } catch {
          if (active && request === ticket)
            setStorageError(
              "Não conseguimos abrir seus dados com segurança. Recarregue a página para tentar novamente.",
            );
        }
      });
    }

    if (!client) {
      acceptUser(null);
      return () => {
        active = false;
      };
    }

    const callback = window.location.pathname === "/entrar";
    const params = new URLSearchParams(window.location.search);
    if (callback && params.has("error"))
      setError("A entrada com Google não foi concluída. Você pode tentar novamente.");
    let receivedEvent = false;
    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, session) => {
      receivedEvent = true;
      // No Supabase calls/await inside the auth listener (SDK lock).
      acceptUser(session?.user ?? null);
    });
    void client.auth
      .getSession()
      .then(({ data, error: sessionError }) => {
        if (!active) return;
        if (sessionError)
          setError("Não foi possível confirmar a entrada. Tente entrar com Google novamente.");
        if (!receivedEvent) acceptUser(data.session?.user ?? null);
        if (callback) {
          // OAuth codes and provider error details must not remain in the address bar.
          window.history.replaceState(window.history.state, "", "/entrar");
        }
      })
      .catch(() => {
        if (!active) return;
        setError("Não foi possível confirmar a entrada. Tente novamente.");
        if (!receivedEvent) acceptUser(null);
      });
    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  async function signIn() {
    const client = getSupabase();
    if (!client || busy) return;
    setBusy(true);
    setError(null);
    try {
      const { error: signInError } = await client.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/entrar`,
          queryParams: { prompt: "select_account" },
        },
      });
      if (signInError) throw signInError;
    } catch {
      setError(
        "Não foi possível abrir a entrada com Google. Tente novamente; se continuar, avise o responsável pelo Via Olímpica.",
      );
      setBusy(false);
    }
  }

  async function signOut() {
    const client = getSupabase();
    if (!client || busy) return false;
    setBusy(true);
    setError(null);
    try {
      const { error: signOutError } = await client.auth.signOut({ scope: "local" });
      if (signOutError) throw signOutError;
      return true;
    } catch {
      setError("Não foi possível sair da conta. Tente novamente.");
      setBusy(false);
      return false;
    }
  }

  return (
    <AuthContext.Provider value={{ user, configured, busy, error, signIn, signOut }}>
      {!ready ? (
        <div className="min-h-screen flex items-center justify-center bg-background p-6 text-center">
          <div>
            <p role={storageError ? "alert" : "status"} className="text-sm text-muted-foreground">
              {storageError ?? "Preparando seu plano..."}
            </p>
            {storageError && (
              <button
                className="mt-4 text-primary underline"
                onClick={() => window.location.reload()}
              >
                Tentar novamente
              </button>
            )}
          </div>
        </div>
      ) : (
        <div key={accountVersion}>{children}</div>
      )}
    </AuthContext.Provider>
  );
}
