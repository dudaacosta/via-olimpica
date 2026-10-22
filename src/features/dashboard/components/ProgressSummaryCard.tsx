import { Link } from "@tanstack/react-router";
import { ChevronRight, Target } from "lucide-react";
import type { summarizeProgress } from "@/features/progress/overview";
import type { Achievement } from "@/features/progress/levels";

export function ProgressSummaryCard({
  summary,
  achievement,
}: {
  summary: ReturnType<typeof summarizeProgress> | null;
  achievement: Achievement | null;
}) {
  return (
    <section className="bg-white border border-border rounded-3xl shadow-[var(--shadow-soft)] p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <h3 className="text-lg font-bold">Meu progresso</h3>
        <Link
          to="/progresso"
          className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1 py-2"
        >
          Ver progresso <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      {summary && achievement ? (
        <>
          <p className="text-2xl font-bold text-[var(--navy)]">
            {summary.completedContents} de {summary.contents.length} conteúdos concluídos
          </p>
          <p className="mt-2 text-sm font-semibold text-[var(--navy)]">
            {achievement.percentage}% do plano • Nível {achievement.level.name}
          </p>
          <div
            role="progressbar"
            aria-label="Meu progresso por conteúdos completos"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={achievement.position}
            className="mt-3 h-3 bg-muted rounded-full overflow-hidden"
          >
            <div
              className="h-full rounded-full"
              style={{ width: `${achievement.position}%`, background: achievement.level.accent }}
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            As partes estudadas continuam salvas. Cada conteúdo completo é uma nova conquista.
          </p>
        </>
      ) : (
        <p>Selecione uma olimpíada e seu ano escolar no perfil para acompanhar seu progresso.</p>
      )}
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-success-soft/60 border border-success/20 px-3 py-2">
        <Target className="h-4 w-4 text-success shrink-0" />
        <p className="text-sm text-[var(--navy)]/80">Cada conquista conta!</p>
      </div>
    </section>
  );
}
