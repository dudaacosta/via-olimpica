import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Trophy, BookOpen } from "lucide-react";
import { AppShell } from "@/features/dashboard/components/AppShell";
import { SCHEDULE } from "@/features/dashboard/data";

export const Route = createFileRoute("/progresso")({
  head: () => ({ meta: [{ title: "Progresso — Via Olímpica" }] }),
  component: ProgressoPage,
});

function ProgressoPage() {
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
      {/* XP banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.45_0.2_265)] text-white p-10 text-center shadow-[var(--shadow-hero)] mb-8">
        <div className="relative z-10">
          <div className="h-14 w-14 mx-auto rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-4">
            <Trophy className="h-6 w-6" />
          </div>
          <div className="text-5xl md:text-6xl font-bold !text-white tracking-tight">0 XP</div>
          <p className="mt-3 text-white/90">Continue estudando para ganhar mais!</p>
        </div>
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      </div>

      {/* Overall progress */}
      <section className="bg-white border border-border rounded-3xl p-6 shadow-[var(--shadow-soft)] mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">Progresso geral</h3>
          <span className="text-lg font-bold text-[var(--navy)]">0%</span>
        </div>
        <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: "0%" }} />
        </div>
        <div className="mt-2 text-sm text-muted-foreground">0 de 6 conteúdos concluídos</div>
      </section>

      {/* Contents */}
      <section className="bg-white border border-border rounded-3xl p-6 shadow-[var(--shadow-soft)]">
        <h3 className="text-lg font-bold mb-4">Conteúdos</h3>
        <ul className="divide-y divide-border">
          {SCHEDULE.map((s) => (
            <li key={s.topic} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
              <div className="h-10 w-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <BookOpen className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-[var(--navy)] truncate">{s.topic}</div>
                <div className="text-sm text-muted-foreground">{s.subject}</div>
              </div>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-warning-soft text-[oklch(0.5_0.15_60)]">
                Em andamento
              </span>
            </li>
          ))}
        </ul>
      </section>
    </AppShell>
  );
}
