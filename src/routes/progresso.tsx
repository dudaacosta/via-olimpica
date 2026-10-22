import { createFileRoute, Link } from "@tanstack/react-router";
import { TrendingUp, Clock, BookOpen } from "lucide-react";
import { AppShell } from "@/features/dashboard/components/AppShell";
import { useStudyOverview } from "@/features/dashboard/useStudyOverview";
import { formatMinutes } from "@/features/schedule/time";
import { LevelCard } from "@/features/progress/components/LevelCard";
import { LevelTrail } from "@/features/progress/components/LevelTrail";
import { WeeklyGoalCard } from "@/features/progress/components/WeeklyGoalCard";

export const Route = createFileRoute("/progresso")({
  head: () => ({ meta: [{ title: "Progresso — Via Olímpica" }] }),
  component: ProgressoPage,
});

function ProgressoPage() {
  const { ready, summary, achievement, weeklyGoal, error } = useStudyOverview();
  if (!ready)
    return (
      <AppShell title="Progresso">
        <p role="status">Carregando suas conclusões...</p>
      </AppShell>
    );
  if (error)
    return (
      <AppShell title="Progresso">
        <p role="alert">{error}</p>
      </AppShell>
    );
  if (!summary || !achievement)
    return (
      <AppShell title="Progresso">
        <p>Selecione sua olimpíada e seu ano escolar para acompanhar o progresso.</p>
        <Link to="/perfil" className="text-primary underline">
          Completar perfil
        </Link>
      </AppShell>
    );
  return (
    <AppShell
      title={
        <span className="inline-flex items-center gap-3">
          <span className="inline-flex h-10 w-10 rounded-xl bg-primary-soft text-primary items-center justify-center">
            <TrendingUp className="h-5 w-5" />
          </span>
          Progresso
        </span>
      }
      subtitle="Acompanhe sua evolução nos estudos."
    >
      <LevelCard
        achievement={achievement}
        completedContents={summary.completedContents}
        totalContents={summary.contents.length}
      />
      <LevelTrail achievement={achievement} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)]">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-semibold text-muted-foreground">Seu tempo de estudo</h3>
          </div>
          <p className="text-xl font-bold text-[var(--navy)]">
            {formatMinutes(summary.completedMinutes)} concluídos
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Tempo estimado dos trechos que você já marcou. Partes de conteúdos também ficam
            registradas aqui.
          </p>
          <details className="mt-4 text-sm text-muted-foreground">
            <summary className="cursor-pointer text-primary">
              Consultar estimativa total do plano
            </summary>
            <p className="mt-2">
              Carga estimada: {formatMinutes(summary.totalMinutes)} • {summary.percentage}% do tempo
              concluído.
            </p>
          </details>
          <Link to="/cronograma" className="mt-4 inline-block text-sm text-primary underline">
            Continuar no cronograma
          </Link>
        </section>
        <WeeklyGoalCard goal={weeklyGoal} />
      </div>

      {/* Contents */}
      <section className="bg-white border border-border rounded-3xl p-6 shadow-[var(--shadow-soft)]">
        <h3 className="text-lg font-bold mb-2">Seu progresso por conteúdo</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Cada trecho estudado é preservado. O conteúdo conta como concluído quando todas as suas
          partes estiverem completas.
        </p>
        <ul className="divide-y divide-border">
          {summary.contents.map((content) => (
            <li
              key={content.contentKey}
              className="flex flex-wrap sm:flex-nowrap items-center gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className="h-10 w-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <BookOpen className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-[var(--navy)]">{content.title}</div>
                <div className="text-sm text-muted-foreground">
                  {content.areaName} • {formatMinutes(content.completedMinutes)} de{" "}
                  {formatMinutes(content.totalMinutes)}
                </div>
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1.5 rounded-full shrink-0 ${content.status === "Concluído" ? "bg-success-soft text-success" : content.status === "Em andamento" ? "bg-warning-soft text-[oklch(0.5_0.15_60)]" : "bg-muted text-muted-foreground"}`}
              >
                {content.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </AppShell>
  );
}
