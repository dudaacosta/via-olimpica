export type GradeId = "6ano" | "7ano" | "8ano" | "9ano" | "1em" | "2em" | "3em";

export const GRADES: { id: GradeId; label: string; level: "ef2" | "em" }[] = [
  { id: "6ano", label: "6º ano", level: "ef2" },
  { id: "7ano", label: "7º ano", level: "ef2" },
  { id: "8ano", label: "8º ano", level: "ef2" },
  { id: "9ano", label: "9º ano", level: "ef2" },
  { id: "1em", label: "1º ano EM", level: "em" },
  { id: "2em", label: "2º ano EM", level: "em" },
  { id: "3em", label: "3º ano EM", level: "em" },
];

export { DAILY_TIME } from "@/features/schedule/time";
export const WEEKLY_DAYS = [1, 2, 3, 4, 5, 6] as const;

export type OlympiadAvailability = "available" | "preparing";

export type Olympiad = {
  id: string;
  acronym: string;
  name: string;
  subject: string;
  description: string;
  range: string;
  grades: GradeId[];
  color: string;
  availability: OlympiadAvailability;
  registrationNote: string;
};

const ALL: GradeId[] = ["6ano", "7ano", "8ano", "9ano", "1em", "2em", "3em"];

export const DEFAULT_OLYMPIAD_ID = "obmep";

export const OLYMPIADS: Olympiad[] = [
  {
    id: "obmep",
    acronym: "OBMEP",
    name: "Olimpíada Brasileira de Matemática das Escolas Públicas",
    subject: "Matemática",
    description: "A maior competição de matemática do Brasil.",
    range: "6º ano EF – 3º ano EM",
    grades: ALL,
    color: "oklch(0.58 0.21 258)",
    availability: "available",
    registrationNote:
      "Inscrição realizada pela escola. Procure a coordenação ou o professor responsável.",
  },
  {
    id: "canguru",
    acronym: "Canguru",
    name: "Concurso Canguru de Matemática Brasil",
    subject: "Matemática",
    description: "Prova internacional com desafios de raciocínio lógico e matemática.",
    range: "6º ano EF – 3º ano EM",
    grades: ALL,
    color: "oklch(0.72 0.17 50)",
    availability: "available",
    registrationNote:
      "A inscrição é realizada exclusivamente pela escola. Procure a coordenação ou o professor responsável.",
  },
  {
    id: "olitef",
    acronym: "OLITEF",
    name: "Olimpíada do Tesouro Direto de Educação Financeira",
    subject: "Educação Financeira",
    description: "Educação financeira, investimentos, economia e decisões responsáveis.",
    range: "6º ano EF – 3º ano EM",
    grades: ALL,
    color: "oklch(0.63 0.16 145)",
    availability: "available",
    registrationNote:
      "A inscrição é gratuita e realizada pela escola. Procure a coordenação ou o professor responsável.",
  },
  {
    id: "oba",
    acronym: "OBA",
    name: "Olimpíada Brasileira de Astronomia e Astronáutica",
    subject: "Astronomia e Astronáutica",
    description: "Preparação teórica em Astronomia e Astronáutica para a OBA.",
    range: "6º ano EF – 3º ano EM",
    grades: ALL,
    color: "oklch(0.55 0.18 290)",
    availability: "available",
    registrationNote: "A inscrição do aluno é realizada pelo professor representante da escola.",
  },
];

export const olympiadsForGrade = (grade: GradeId | null) =>
  grade ? OLYMPIADS.filter((olympiad) => olympiad.grades.includes(grade)) : OLYMPIADS;

export const isOlympiadAvailable = (olympiad: Olympiad) => olympiad.availability === "available";

export const isOlympiadAvailableId = (id: string | null) =>
  OLYMPIADS.some((olympiad) => olympiad.id === id && isOlympiadAvailable(olympiad));

export const availableOlympiadsForGrade = (grade: GradeId | null) =>
  olympiadsForGrade(grade).filter(isOlympiadAvailable);

export const normalizeOlympiadSelection = (id: string | null) => {
  if (id === null) return null;
  return isOlympiadAvailableId(id) ? id : DEFAULT_OLYMPIAD_ID;
};

export const findOlympiad = (id: string | null) =>
  OLYMPIADS.find((olympiad) => olympiad.id === id) ?? null;

export const findGrade = (id: GradeId | null) => GRADES.find((grade) => grade.id === id) ?? null;
