import { createFileRoute } from "@tanstack/react-router";
import { Save, ChevronDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/features/dashboard/components/AppShell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useQuizStore } from "@/features/quiz/store";
import {
  DEFAULT_OLYMPIAD_ID,
  GRADES,
  DAILY_TIME,
  findOlympiad,
  isOlympiadAvailable,
  normalizeOlympiadSelection,
  olympiadsForGrade,
} from "@/features/quiz/data";
import { normalizeDailyTimeLabel } from "@/features/schedule/time";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

export const Route = createFileRoute("/perfil")({
  head: () => ({ meta: [{ title: "Perfil — Via Olímpica" }] }),
  component: PerfilPage,
});

const DAY_OPTS = [1, 2, 3, 4, 5, 6];

function PerfilPage() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsubscribe = useQuizStore.persist.onFinishHydration(() => setHydrated(true));
    setHydrated(useQuizStore.persist.hasHydrated());
    return unsubscribe;
  }, []);

  // Montar o formulario depois da leitura dos valores salvos. Nao ressincronizar
  // a cada render: isso apagaria alteracoes que o aluno ainda nao salvou.
  if (!hydrated) {
    return (
      <AppShell title="Perfil" subtitle="Edite suas preferências.">
        <p className="text-sm text-muted-foreground" role="status">Carregando suas preferências...</p>
      </AppShell>
    );
  }
  return <PerfilForm />;
}

function PerfilForm() {
  const store = useQuizStore();
  const [name, setName] = useState(store.name || "duda");
  const [grade, setGrade] = useState(store.grade ?? "9ano");
  const [time, setTime] = useState(() => normalizeDailyTimeLabel(store.dailyTime));
  const [days, setDays] = useState<number>(store.weeklyDays ?? 5);
  const availableOlympiads = useMemo(() => olympiadsForGrade(grade), [grade]);
  const [olympiad, setOlympiad] = useState<string>(
    normalizeOlympiadSelection(store.olympiad) ?? DEFAULT_OLYMPIAD_ID,
  );

  useEffect(() => {
    const selected = availableOlympiads.find((item) => item.id === olympiad);
    if (!selected || !isOlympiadAvailable(selected)) {
      setOlympiad(DEFAULT_OLYMPIAD_ID);
    }
  }, [availableOlympiads, olympiad]);

  const selectedOlympiad = findOlympiad(olympiad) ?? findOlympiad(DEFAULT_OLYMPIAD_ID)!;

  const save = () => {
    store.setName(name);
    store.setGrade(grade);
    store.setDailyTime(time);
    store.setWeeklyDays(days);
    store.setOlympiad(olympiad);
    toast.success("Alterações salvas com sucesso!");
  };

  return (
    <AppShell title="Perfil" subtitle="Edite suas preferências.">
      <div className="bg-white border border-border rounded-3xl shadow-[var(--shadow-soft)] p-6 md:p-8 space-y-8 max-w-3xl">
        {/* Name */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-[var(--navy)]">Nome</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 rounded-xl border-2"
          />
        </div>

        {/* Grade */}
        <Section title="Ano escolar">
          <PillGrid
            options={GRADES.map((g) => ({ value: g.id, label: g.label }))}
            value={grade}
            onChange={(v) => setGrade(v as typeof grade)}
            cols={4}
          />
        </Section>

        {/* Daily time */}
        <Section title="Tempo disponível por dia">
          <PillGrid
            options={DAILY_TIME.map((t) => ({ value: t, label: t }))}
            value={time}
            onChange={setTime}
            cols={3}
          />
        </Section>

        {/* Weekly days */}
        <Section title="Quantas vezes por semana">
          <PillGrid
            options={DAY_OPTS.map((d) => ({ value: String(d), label: `${d} ${d === 1 ? "dia" : "dias"}` }))}
            value={String(days)}
            onChange={(v) => setDays(Number(v))}
            cols={6}
          />
        </Section>

        {/* Olympiad */}
        <Section title="Olimpíada escolhida">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full text-left bg-white border-2 border-border rounded-2xl p-4 flex items-center gap-4 hover:border-primary/40 transition">
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold shrink-0"
                  style={{ backgroundColor: selectedOlympiad.color }}
                >
                  {selectedOlympiad.acronym.slice(0, 3)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[var(--navy)]">{selectedOlympiad.acronym}</div>
                  <div className="text-sm text-muted-foreground">{selectedOlympiad.subject}</div>
                </div>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[20rem]">
              <DropdownMenuRadioGroup value={olympiad} onValueChange={setOlympiad}>
                {availableOlympiads.map((item) => {
                  const available = isOlympiadAvailable(item);
                  return (
                    <DropdownMenuRadioItem
                      key={item.id}
                      value={item.id}
                      disabled={!available}
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div
                          className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-xs"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.acronym.slice(0, 3)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-[var(--navy)]">{item.acronym}</div>
                          <div className="text-sm text-muted-foreground">{item.subject}</div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                          {available ? "Disponível" : "Em preparação"}
                        </span>
                      </div>
                    </DropdownMenuRadioItem>
                  );
                })}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <p className="text-xs text-muted-foreground">
            OBMEP, Canguru, OLITEF e OBA estão disponíveis. A inscrição nas quatro competições é realizada pela escola.
          </p>
        </Section>

        <Button onClick={save} className="w-full h-14 rounded-xl text-base font-semibold gap-2">
          <Save className="h-5 w-5" /> Salvar alterações
        </Button>
      </div>
    </AppShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-semibold text-[var(--navy)]">{title}</Label>
      {children}
    </div>
  );
}

function PillGrid({
  options, value, onChange, cols,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  cols: number;
}) {
  const colsClass = { 3: "md:grid-cols-3", 4: "md:grid-cols-4", 6: "md:grid-cols-6" }[cols] ?? "md:grid-cols-4";
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 ${colsClass} gap-2.5`}>
      {options.map((o) => {
        const selected = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={[
              "px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all",
              selected
                ? "border-primary bg-primary-soft text-primary"
                : "border-border bg-white text-[var(--navy)] hover:border-primary/40 hover:bg-primary-softer",
            ].join(" ")}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
