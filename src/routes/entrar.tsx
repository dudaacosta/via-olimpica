import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/auth-context";
import { useQuizStore } from "@/features/quiz/store";

export const Route = createFileRoute("/entrar")({
  head: () => ({ meta: [{ title: "Entrar — Via Olímpica" }] }),
  component: EntrarPage,
});

function EntrarPage() {
  const { user, configured, busy, error, signIn } = useAuth();
  const completed = useQuizStore((s) => s.completed);
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-5 py-10">
      <section className="w-full max-w-md rounded-3xl border border-border bg-white p-7 md:p-10 shadow-[var(--shadow-soft)] text-center">
        <Link to="/" aria-label="Via Olímpica, página inicial">
          <img
            src="/logo-via-olimpica.jpeg"
            alt="Via Olímpica"
            className="h-24 w-24 object-contain mx-auto mb-5"
          />
        </Link>
        <h1 className="text-2xl font-bold text-[var(--navy)]">
          {user ? "Sua conta está conectada" : "Seu caminho começa aqui"}
        </h1>
        {user ? (
          <>
            <p className="mt-3 text-sm text-muted-foreground break-all">{user.email}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Seu plano e progresso desta conta ficam salvos neste navegador. A sincronização entre
              aparelhos ainda não está disponível.
            </p>
            <Button asChild className="w-full mt-6">
              <Link to={completed ? "/inicio" : "/quiz"}>
                {completed ? "Acessar meu plano" : "Criar meu plano de estudos"}
              </Link>
            </Button>
            <Link to="/perfil" className="block mt-4 text-sm text-primary underline">
              Gerenciar minha conta
            </Link>
          </>
        ) : (
          <>
            <p className="mt-3 text-sm text-muted-foreground">
              Entre ou crie sua conta com o Google para organizar seus estudos.
            </p>
            <Button
              variant="outline"
              className="w-full mt-6 h-12 gap-3"
              disabled={!configured || busy}
              onClick={() => void signIn()}
            >
              <span aria-hidden="true" className="font-bold text-lg">
                G
              </span>
              {busy ? "Abrindo Google..." : "Continuar com Google"}
            </Button>
            {!configured && (
              <p className="mt-4 text-sm text-muted-foreground" role="status">
                A entrada com Google está em preparação. Você pode continuar estudando sem conta.
              </p>
            )}
            <p className="mt-4 text-xs text-muted-foreground">
              Na primeira entrada, sua conta do Via Olímpica será criada. Use uma conta Google que
              você tem permissão para utilizar.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              O plano usado sem login permanece separado. Ele não será apagado nem transferido
              automaticamente para uma conta.
            </p>
            <Link
              to={completed ? "/inicio" : "/quiz"}
              className="block mt-6 text-sm text-primary underline"
            >
              Continuar sem conta
            </Link>
          </>
        )}
        {error && (
          <p className="mt-4 text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
      </section>
    </main>
  );
}
