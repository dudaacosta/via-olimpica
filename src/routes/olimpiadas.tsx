import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/features/dashboard/components/AppShell";
import { Button } from "@/components/ui/button";
import { OLYMPIADS, isOlympiadAvailable } from "@/features/quiz/data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/olimpiadas")({
  head: () => ({ meta: [{ title: "Olimpíadas — Via Olímpica" }] }),
  component: OlimpiadasPage,
});

function OlimpiadasPage() {
  return (
    <AppShell title="Olimpíadas" subtitle="Explore as competições e adicione ao seu plano.">
      <ul className="space-y-3">
        {OLYMPIADS.map((o) => {
          const available = isOlympiadAvailable(o);
          return (
            <li
              key={o.id}
              className="bg-white border border-border rounded-2xl p-5 flex flex-col md:flex-row md:items-center gap-5 shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div
                className="h-14 w-14 rounded-full flex items-center justify-center text-white font-bold shrink-0"
                style={{ backgroundColor: o.color }}
              >
                {o.acronym.slice(0, 3)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-[var(--navy)] text-lg">{o.acronym}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary-soft text-primary font-medium">
                    {o.subject}
                  </span>
                  <span className={[
                    "text-xs px-2 py-0.5 rounded-full font-medium",
                    available
                      ? "bg-success-soft text-success"
                      : "bg-muted text-muted-foreground",
                  ].join(" ")}>
                    {available ? "Disponível" : "Base de estudos em preparação"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{o.description}</p>
                <p className="text-xs text-muted-foreground mt-2">{o.registrationNote}</p>
              </div>
              {available ? (
                <Link to="/obmep-detalhes" search={{ id: o.id }}>
                  <Button variant="outline" className="rounded-xl border-2 hover:border-primary hover:text-primary hover:bg-primary-softer shrink-0 gap-1.5">
                    Ver detalhes <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Button variant="secondary" className="rounded-xl opacity-70 cursor-not-allowed shrink-0" disabled>
                  Base em preparação
                </Button>
              )}
            </li>
          );
        })}
      </ul>
    </AppShell>
  );
}
