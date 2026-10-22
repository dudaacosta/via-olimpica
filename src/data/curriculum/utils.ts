import type { GradeId } from "@/features/quiz/data";
import type {
  CurriculumAdaptation,
  CurriculumContentRecord,
  CurriculumContentView,
  CurriculumDifficulty,
  CurriculumImportance,
  OlympiadCurriculum,
} from "./types";
import type { ActivityType, Difficulty, OlympiadContent } from "@/data/olimpiadas";

const difficultyLabels: Record<CurriculumDifficulty, string> = {
  1: "Introdutória",
  2: "Básica",
  3: "Intermediária",
  4: "Avançada",
  5: "Olímpica",
};

function toScheduleDifficulty(value: CurriculumDifficulty): Difficulty {
  if (value <= 2) return "fácil";
  if (value === 3) return "médio";
  return "difícil";
}

function toPriority(value: CurriculumImportance): number {
  if (value === "essencial") return 5;
  if (value === "importante") return 3;
  return 1;
}

function totalMinutes(adaptation: CurriculumAdaptation): number {
  return adaptation.theoryMinutes + adaptation.exerciseMinutes;
}

export function getCurriculumLevelForGrade(
  curriculum: OlympiadCurriculum,
  grade: GradeId,
) {
  return curriculum.levels.find((level) => level.active && level.grades.includes(grade)) ?? null;
}

export function getCurriculumRecordsForGrade(
  curriculum: OlympiadCurriculum,
  grade: GradeId,
): Array<{ record: CurriculumContentRecord; adaptation: CurriculumAdaptation }> {
  const level = getCurriculumLevelForGrade(curriculum, grade);
  if (!level) return [];
  return curriculum.contents
    .map((record) => ({
      record,
      adaptation: record.adaptations.find((item) => item.levelId === level.id) ?? null,
    }))
    .filter((item): item is { record: CurriculumContentRecord; adaptation: CurriculumAdaptation } => Boolean(item.adaptation))
    .sort((a, b) => a.adaptation.order - b.adaptation.order || a.record.id.localeCompare(b.record.id));
}

export function getCurriculumContentViews(
  curriculum: OlympiadCurriculum,
  grade: GradeId,
): CurriculumContentView[] {
  const areaMap = new Map(curriculum.areas.map((area) => [area.id, area.name]));
  return getCurriculumRecordsForGrade(curriculum, grade).map(({ record, adaptation }) => ({
    contentId: record.id,
    title: record.title,
    description: record.description,
    area: areaMap.get(record.areaId) ?? record.areaId,
    moduleTitle: record.moduleTitle,
    difficulty: difficultyLabels[adaptation.difficulty],
    difficultyValue: adaptation.difficulty,
    importance: adaptation.importance,
    treatment: adaptation.treatment,
    totalMinutes: totalMinutes(adaptation),
    sourceLabels: record.sources.map((source) => `${source.title} — ${source.pageSection}`),
  }));
}

export function buildCurriculumPlan(
  curriculum: OlympiadCurriculum,
  grade: GradeId,
): OlympiadContent | null {
  const level = getCurriculumLevelForGrade(curriculum, grade);
  if (!level) return null;
  const areaMap = new Map(curriculum.areas.map((area) => [area.id, area]));
  const grouped = new Map<string, Array<{ record: CurriculumContentRecord; adaptation: CurriculumAdaptation }>>();
  for (const item of getCurriculumRecordsForGrade(curriculum, grade)) {
    const list = grouped.get(item.record.areaId) ?? [];
    list.push(item);
    grouped.set(item.record.areaId, list);
  }

  const areas = [...grouped.entries()]
    .sort((a, b) => (areaMap.get(a[0])?.order ?? 999) - (areaMap.get(b[0])?.order ?? 999))
    .map(([areaId, items]) => ({
      id: areaId,
      name: areaMap.get(areaId)?.name ?? areaId,
      contents: items.map(({ record, adaptation }) => ({
        id: record.id,
        title: record.title,
        description: record.description,
        priority: toPriority(adaptation.importance),
        difficulty: toScheduleDifficulty(adaptation.difficulty),
        estimatedHours: totalMinutes(adaptation) / 60,
        activityType: "teoria + exercícios" as ActivityType,
        suggestedOrder: adaptation.order,
      })),
    }));

  return {
    olympiadId: curriculum.olympiadId,
    grade,
    phases: [{
      id: `${curriculum.olympiadId}-${level.id}`,
      name: `${curriculum.olympiadId.toUpperCase()} — ${level.name}`,
      areas,
    }],
  };
}

export function buildCurriculumPlans(curriculum: OlympiadCurriculum): OlympiadContent[] {
  const grades = new Set<GradeId>();
  curriculum.levels.filter((level) => level.active).forEach((level) => level.grades.forEach((grade) => grades.add(grade)));
  return [...grades].map((grade) => buildCurriculumPlan(curriculum, grade)).filter((plan): plan is OlympiadContent => Boolean(plan));
}

export function validateCurriculum(curriculum: OlympiadCurriculum): string[] {
  const errors: string[] = [];
  const contentIds = new Set<string>();
  const mappedTopics = new Set<string>();
  const levelIds = new Set(curriculum.levels.map((level) => level.id));
  const areaIds = new Set(curriculum.areas.map((area) => area.id));

  for (const record of curriculum.contents) {
    if (contentIds.has(record.id)) errors.push(`ID de conteúdo duplicado: ${record.id}`);
    contentIds.add(record.id);
    if (!areaIds.has(record.areaId)) errors.push(`${record.id}: área inexistente ${record.areaId}`);
    if (!record.sources.length) errors.push(`${record.id}: sem fonte`);
    if (!record.sourceTopicIds.length && !record.sources.some((source) => source.evidence === "desdobramento_didatico")) {
      errors.push(`${record.id}: sem tópico oficial ou classificação didática`);
    }
    record.sourceTopicIds.forEach((topic) => mappedTopics.add(topic));
    for (const adaptation of record.adaptations) {
      if (!levelIds.has(adaptation.levelId)) errors.push(`${record.id}: nível inexistente ${adaptation.levelId}`);
      if (!Number.isInteger(adaptation.theoryMinutes) || adaptation.theoryMinutes < 0) errors.push(`${record.id}: teoria inválida`);
      if (!Number.isInteger(adaptation.exerciseMinutes) || adaptation.exerciseMinutes <= 0) errors.push(`${record.id}: exercícios inválidos`);
      if (adaptation.theoryMinutes + adaptation.exerciseMinutes <= 0) errors.push(`${record.id}: tempo total inválido`);
      if (!Number.isInteger(adaptation.order) || adaptation.order <= 0) errors.push(`${record.id}: ordem inválida`);
      if (adaptation.difficulty < 1 || adaptation.difficulty > 5) errors.push(`${record.id}: dificuldade inválida`);
    }
  }
  for (const topic of curriculum.officialTopicIds) if (!mappedTopics.has(topic)) errors.push(`Tópico oficial sem mapeamento: ${topic}`);
  for (const topic of mappedTopics) if (!curriculum.officialTopicIds.includes(topic)) errors.push(`Tópico mapeado não declarado: ${topic}`);
  for (const level of curriculum.levels.filter((item) => item.active)) {
    if (!level.grades.length) errors.push(`Nível ativo sem anos: ${level.id}`);
    for (const grade of level.grades) {
      if (!getCurriculumRecordsForGrade(curriculum, grade).length) errors.push(`Sem conteúdos para ${grade}`);
    }
  }
  return errors;
}
