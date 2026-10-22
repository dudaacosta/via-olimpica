import type { GradeId } from "@/features/quiz/data";

export type CurriculumOrigin =
  | "oficial_nivel_atual"
  | "oficial_herdado"
  | "oficial_nucleo_comum"
  | "desdobramento_didatico"
  | "observado_em_prova_oficial"
  | "complemento_via_olimpica"
  | "pratica_opcional";

export type CurriculumTreatment = "novo" | "revisao" | "aprofundamento";
export type CurriculumImportance = "essencial" | "importante" | "complementar";
export type CurriculumStatus = "rascunho" | "revisado" | "publicado" | "arquivado";
export type CurriculumDifficulty = 1 | 2 | 3 | 4 | 5;

export type CurriculumFormula = {
  expression: string;
  variables?: Record<string, string>;
  note?: string;
};

export type CurriculumSource = {
  id: string;
  type:
    | "regulamento"
    | "programa_oficial"
    | "caderno_estudante"
    | "prova_oficial"
    | "gabarito_oficial"
    | "site_oficial"
    | "material_complementar";
  title: string;
  institution: string;
  editionYear: number | null;
  pageSection: string;
  url: string;
  consultedAt: string;
  official: boolean;
  evidence:
    | "mencao_direta"
    | "conteudo_herdado"
    | "desdobramento_didatico"
    | "aplicacao_observada"
    | "regra_atualizavel";
};

export type CurriculumLevel = {
  id: string;
  code: string;
  name: string;
  description: string;
  grades: GradeId[];
  order: number;
  active: boolean;
};

export type CurriculumArea = {
  id: string;
  name: string;
  description: string;
  order: number;
};

export type CurriculumAdaptation = {
  levelId: string;
  originProgram: CurriculumOrigin;
  treatment: CurriculumTreatment;
  importance: CurriculumImportance;
  difficulty: CurriculumDifficulty;
  order: number;
  theoryMinutes: number;
  exerciseMinutes: number;
  optionalPracticeMinutes: number;
  exerciseCount: number;
  exerciseTypes: string[];
  languageAdaptation: string;
  masteryCriteria: string;
  note: string;
};

export type CurriculumContentRecord = {
  id: string;
  olympiadId: string;
  areaId: string;
  macrotheme: string;
  moduleId: string;
  moduleTitle: string;
  title: string;
  description: string;
  subtopics: string[];
  learningObjectives: string[];
  prerequisites: string[];
  theoryOutline: string[];
  formulas: CurriculumFormula[];
  commonErrors: string[];
  keywords: string[];
  requiresUpdate: boolean;
  reviewFrequencyMonths: number | null;
  status: CurriculumStatus;
  sourceTopicIds: string[];
  adaptations: CurriculumAdaptation[];
  sources: CurriculumSource[];
};

export type CurriculumDetails = {
  shortDescription: string;
  audience: string;
  examType: string;
  about: string;
  formatTitle: string;
  stages: string[];
  preparationNote: string;
  officialUrl: string;
  officialLabel: string;
};

export type OlympiadCurriculum = {
  olympiadId: string;
  editionYear: number;
  version: string;
  lastReview: string;
  levels: CurriculumLevel[];
  areas: CurriculumArea[];
  contents: CurriculumContentRecord[];
  officialTopicIds: string[];
  details: CurriculumDetails;
};

export type CurriculumContentView = {
  contentId: string;
  title: string;
  description: string;
  area: string;
  moduleTitle: string;
  difficulty: string;
  difficultyValue: CurriculumDifficulty;
  importance: CurriculumImportance;
  treatment: CurriculumTreatment;
  totalMinutes: number;
  sourceLabels: string[];
};
