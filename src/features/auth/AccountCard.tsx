import { Link, useNavigate } from "@tanstack/react-router";
import { LogOut, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "./auth-context";

export function AccountCard() {
  const { user, busy, error, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <section
      className="max-w-3xl rounded-3xl border border-border bg-white p-6 md:p-8 mb-6 shadow-[var(--shadow-soft)]"
      aria-labelledby="account-title"
    >
      <div className="flex items-center gap-3 mb-3">
        <UserRound className="h-5 w-5 text-primary" />
        <h2 id="account-title" className="font-bold text-[var(--navy)]">
          Sua conta
        </h2>
      </div>
      {user ? (
        <>
          <p className="text-sm text-muted-foreground break-all">
            Conectado com Google: {user.email}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Seu plano e progresso desta conta ficam salvos neste navegador. A sincronização entre
            aparelhos ainda não está disponível.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            disabled={busy}
            onClick={async () => {
              if (await signOut()) await navigate({ to: "/entrar" });
            }}
          >
            <LogOut className="h-4 w-4" />
            {busy ? "Saindo..." : "Sair da conta"}
          </Button>
        </>
      ) : (
        <>
          <p className="text-sm text-muted-foreground">
            Você está estudando sem uma conta. Seu plano atual continua salvo neste navegador.
          </p>
          <Button asChild className="mt-4">
            <Link to="/entrar">Entrar ou criar conta com Google</Link>
          </Button>
        </>
      )}
      {error && (
        <p className="mt-3 text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </section>
  );
}
