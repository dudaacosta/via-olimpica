import { Link } from "@tanstack/react-router";
import { Target } from "lucide-react";
import { formatDate } from "@/features/schedule/calendar";
import type { WeeklyGoal } from "../weeklyGoal";

export function WeeklyGoalCard({ goal }: { goal: WeeklyGoal | null }) {
  return (
    <section className="rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-success-soft text-success">
          <Target className="h-5 w-5" />
        </div>
        <h3 className="text-sm font-semibold text-muted-foreground">Meta semanal</h3>
      </div>
      {!goal ? (
        <>
          <p className="font-semibold text-[var(--navy)]">Vamos organizar sua semana?</p>
          <Link to="/perfil" className="mt-2 inline-block text-sm text-primary underline">
            Complete a data da prova e sua disponibilidade no perfil.
          </Link>
        </>
      ) : (
        <>
          {goal.plannedContents > 0 ? (
            <>
              <p className="text-xl font-bold text-[var(--navy)]">
                {goal.completedContents} de {goal.plannedContents} conteúdos concluídos
              </p>
              <div
                role="progressbar"
                aria-label="Meta semanal de conteúdos"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={goal.percentage}
                aria-valuetext={`${goal.completedContents} de ${goal.plannedContents} conteúdos concluídos`}
                className="mt-3 h-2.5 rounded-full bg-muted overflow-hidden"
              >
                <div
                  className="h-full rounded-full bg-success"
                  style={{ width: `${goal.percentage}%` }}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Progresso semanal: {goal.percentage}%
              </p>
            </>
          ) : (
            <p className="font-semibold text-[var(--navy)]">
              {goal.continuingContents > 0
                ? "Uma semana para avançar, parte por parte."
                : "Nenhum conteúdo previsto nesta semana."}
            </p>
          )}
          <p className="mt-3 text-xs text-muted-foreground">
            Semana {goal.week} • {formatDate(goal.startDate)} a {formatDate(goal.endDate)}
          </p>
          {goal.continuingContents > 0 && (
            <p className="mt-2 text-sm text-muted-foreground">
              {goal.continuingContents}{" "}
              {goal.continuingContents === 1
                ? "conteúdo em continuidade tem"
                : "conteúdos em continuidade têm"}{" "}
              trechos previstos nesta semana. As partes estudadas ficam salvas, sem contar uma
              conclusão integral.
            </p>
          )}
          {goal.plannedContents > 0 && (
            <p className="mt-2 text-xs text-muted-foreground">
              A meta conta conteúdos com conclusão prevista nesta semana. Trechos parciais ficam
              registrados no progresso detalhado.
            </p>
          )}
        </>
      )}
    </section>
  );
}
