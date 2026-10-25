import type { GradeId } from "@/features/quiz/data";
import { ADDITIONAL_OLYMPIAD_CONTENTS } from "./curriculum/registry";
import {
  getObmepConteudosPorGrade,
  gradeOrder,
  type ConteudoObmepCronograma,
} from "./obmepConteudos";

export type ActivityType =
  | "Estudo teórico"
  | "Resolução de questões"
  | "Revisão"
  | "teoria"
  | "exercícios"
  | "teoria + exercícios"
  | "revisão"
  | "simulado";
export type Difficulty = "fácil" | "médio" | "difícil";

export type ContentItem = {
  id: string;
  title: string;
  description: string;
  priority: number;
  difficulty: Difficulty;
  estimatedHours: number;
  activityType: ActivityType;
  suggestedOrder: number;
};

export type Area = {
  id: string;
  name: string;
  contents: ContentItem[];
};

export type Phase = {
  id: string;
  name: string;
  areas: Area[];
};

export type OlympiadContent = {
  olympiadId: string;
  grade: GradeId;
  phases: Phase[];
};

function mapPriorityToNumber(priority: string): number {
  switch (priority) {
    case "Alta":
      return 5;
    case "Média":
      return 3;
    case "Baixa":
      return 1;
    default:
      return 3;
  }
}

function mapDifficulty(difficulty: string): "fácil" | "médio" | "difícil" {
  switch (difficulty) {
    case "Básica":
      return "fácil";
    case "Avançada":
      return "difícil";
    case "Média":
    default:
      return "médio";
  }
}

function mapActivityType(activity: string): ActivityType {
  if (activity === "teoria" || activity === "teoria + exercícios") {
    return "Estudo teórico";
  }
  if (activity === "exercícios") {
    return "Resolução de questões";
  }
  if (activity === "revisão" || activity === "simulado") {
    return "Revisão";
  }
  return "Estudo teórico";
}

function generateOlympiadContent(grade: GradeId): OlympiadContent {
  const contents = getObmepConteudosPorGrade(grade);

  // Agrupar por área
  const areaMap = new Map<string, ConteudoObmepCronograma[]>();
  contents.forEach((content) => {
    if (!areaMap.has(content.area)) {
      areaMap.set(content.area, []);
    }
    areaMap.get(content.area)!.push(content);
  });

  // Converter para estrutura de Area
  const areas: Area[] = Array.from(areaMap.entries()).map(([areaName, items]) => ({
    id: areaName.toLowerCase().replace(/\s+/g, "-"),
    name: areaName,
    contents: items.map((item) => ({
      id: item.contentId,
      title: item.conteudo,
      description: item.descricaoCurta,
      priority: mapPriorityToNumber(item.prioridade),
      difficulty: mapDifficulty(item.dificuldade),
      estimatedHours: item.tempoEstimadoHoras,
      activityType: mapActivityType(item.tipoAtividade),
      suggestedOrder: item.ordemSugerida,
    })),
  }));

  return {
    olympiadId: "obmep",
    grade,
    phases: [
      {
        id: "cronograma-obmep",
        name: "Cronograma OBMEP",
        areas,
      },
    ],
  };
}

export const OLYMPIAD_CONTENTS: OlympiadContent[] = [
  ...gradeOrder.map((grade) => generateOlympiadContent(grade)),
  ...ADDITIONAL_OLYMPIAD_CONTENTS,
];
