import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { ArrowLeft, Bookmark, FileText, Star } from "lucide-react";
import { AppShell } from "@/features/dashboard/components/AppShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { findOlympiad } from "@/features/quiz/data";
import { useQuizStore } from "@/features/quiz/store";
import { getObmepConteudosPorGrade } from "@/data/obmepConteudos";
import { useFavoritesStore } from "@/features/favorites/store";
import { getOlympiadContentViews, getOlympiadDetails } from "@/data/curriculum/registry";
import { formatMinutes } from "@/features/schedule/time";

const OBMEP_DETAILS = {
  shortDescription:
    "Olimpíada Brasileira de Matemática das Escolas Públicas, voltada a estudantes de escolas públicas e privadas do Brasil.",
  audience: "6º ano do Ensino Fundamental ao 3º ano do Ensino Médio",
  examType: "1ª fase objetiva + 2ª fase discursiva",
  about:
    "Promovida pelo IMPA, a OBMEP incentiva o estudo da matemática e revela talentos em todo o país.",
  formatTitle: "Fases da competição",
  stages: ["Fase 1: Prova objetiva na escola", "Fase 2: Prova discursiva"],
  preparationNote:
    "A Via Olímpica organiza os conteúdos da OBMEP conforme o ano escolar selecionado.",
  officialUrl: "https://www.obmep.org.br/regulamento.htm",
  officialLabel: "Edital da OBMEP",
};

type DetailContent = {
  contentId: string;
  title: string;
  description: string;
  area: string;
  difficulty: string;
  totalMinutes?: number;
  treatment?: string;
};

export const Route = createFileRoute("/obmep-detalhes")({
  validateSearch: (search: Record<string, unknown>) => ({
    id: typeof search.id === "string" ? search.id : "obmep",
  }),
  head: () => ({ meta: [{ title: "Detalhes da olimpíada — Via Olímpica" }] }),
  component: OlympiadDetailsPage,
});

function OlympiadDetailsPage() {
  const { id } = Route.useSearch();
  const store = useQuizStore();
  const olympiad = findOlympiad(id);
  const isFavorite = useFavoritesStore((state) => state.favoriteOlympiadIds.includes(id));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const details = id === "obmep" ? OBMEP_DETAILS : getOlympiadDetails(id);
  const contents = useMemo<DetailContent[]>(() => {
    if (!store.grade) return [];
    if (id === "obmep") {
      return getObmepConteudosPorGrade(store.grade).map((content) => ({
        contentId: content.contentId,
        title: content.conteudo,
        description: content.descricaoCurta,
        area: content.area,
        difficulty: content.dificuldade,
        totalMinutes: Math.round(content.tempoEstimadoHoras * 60),
        treatment: content.tipoAtividade,
      }));
    }
    return getOlympiadContentViews(id, store.grade);
  }, [id, store.grade]);

  if (!olympiad || !details) {
    return (
      <AppShell title="Olimpíadas" subtitle="Detalhes indisponíveis.">
        <div className="bg-white border border-border rounded-3xl shadow-[var(--shadow-soft)] p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Não foi possível carregar os detalhes desta olimpíada.
          </p>
          <div className="mt-6">
            <Link to="/olimpiadas">
              <Button variant="outline">Voltar para olimpíadas</Button>
            </Link>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell title={olympiad.acronym} subtitle={olympiad.subject}>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link
            to="/olimpiadas"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              variant={isFavorite ? "secondary" : "outline"}
              className="rounded-xl"
              aria-pressed={isFavorite}
              onClick={() => toggleFavorite(olympiad.id)}
            >
              <Bookmark className="h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
              {isFavorite ? "Salvo nos favoritos" : "Salvar nos favoritos"}
            </Button>
            <Button asChild variant="secondary" className="rounded-xl">
              <a
                href={details.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${details.officialLabel}`}
              >
                <FileText className="h-4 w-4" /> {details.officialLabel}
              </a>
            </Button>
          </div>
        </div>

        <div className="bg-white border border-border rounded-3xl shadow-[var(--shadow-soft)] p-6 space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div
                className="h-16 w-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: olympiad.color }}
              >
                {olympiad.acronym.slice(0, 3)}
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--navy)]">{olympiad.acronym}</div>
                <div className="text-sm text-muted-foreground">{olympiad.subject}</div>
              </div>
            </div>
            <div className="text-right md:text-left">
              <div className="text-sm text-muted-foreground">Área</div>
              <div className="font-semibold text-[var(--navy)]">{olympiad.subject}</div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{details.shortDescription}</p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              <InfoCard label="Público" value={details.audience} />
              <InfoCard label="Tipo de prova" value={details.examType} />
              <InfoCard label="Sobre" value={details.about} />
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary-softer p-4 text-sm text-[var(--navy)]">
              {details.preparationNote}
            </div>
          </div>
        </div>

        <section className="bg-white border border-border rounded-3xl shadow-[var(--shadow-soft)] p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-bold text-[var(--navy)]">{details.formatTitle}</h2>
              <p className="text-sm text-muted-foreground">Veja como a competição é organizada.</p>
            </div>
            <Star className="h-5 w-5 text-primary" />
          </div>
          <ul className="space-y-3">
            {details.stages.map((stage) => (
              <li
                key={stage}
                className="rounded-2xl border border-border bg-background p-4 text-sm text-[var(--navy)]"
              >
                {stage}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white border border-border rounded-3xl shadow-[var(--shadow-soft)] p-6">
          <h2 className="text-lg font-bold text-[var(--navy)] mb-3">Conteúdos da preparação</h2>
          <div className="space-y-3">
            {contents.length === 0 ? (
              <div className="rounded-2xl border border-border bg-background p-4 text-sm text-muted-foreground">
                Selecione seu ano escolar no perfil para ver os conteúdos correspondentes.
              </div>
            ) : (
              contents.map((content) => (
                <div
                  key={content.contentId}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-[var(--navy)]">{content.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {content.area}
                      {content.totalMinutes ? ` • ${formatMinutes(content.totalMinutes)}` : ""}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {content.treatment && <Badge variant="secondary">{content.treatment}</Badge>}
                    <Badge variant="outline">{content.difficulty}</Badge>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-border bg-muted p-4">
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">{label}</div>
      <div className="font-semibold text-[var(--navy)]">{value}</div>
    </div>
  );
}
