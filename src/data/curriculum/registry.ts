import type { GradeId } from "@/features/quiz/data";
import { CANGURU_CURRICULUM } from "./canguru";
import { OLITEF_CURRICULUM } from "./olitef";
import { OBA_CURRICULUM } from "./oba";
import type { CurriculumContentView, OlympiadCurriculum } from "./types";
import {
  buildCurriculumPlans,
  getCurriculumContentViews,
  getCurriculumLevelForGrade,
  validateCurriculum,
} from "./utils";

export const CURRICULA: OlympiadCurriculum[] = [
  CANGURU_CURRICULUM,
  OLITEF_CURRICULUM,
  OBA_CURRICULUM,
];

export const ADDITIONAL_OLYMPIAD_CONTENTS = CURRICULA.flatMap(buildCurriculumPlans);

export function getCurriculumByOlympiadId(id: string | null): OlympiadCurriculum | null {
  return CURRICULA.find((curriculum) => curriculum.olympiadId === id) ?? null;
}

export function getCurriculumLevelForOlympiadGrade(id: string, grade: GradeId) {
  const curriculum = getCurriculumByOlympiadId(id);
  return curriculum ? getCurriculumLevelForGrade(curriculum, grade) : null;
}

export function getOlympiadContentViews(id: string, grade: GradeId): CurriculumContentView[] {
  const curriculum = getCurriculumByOlympiadId(id);
  return curriculum ? getCurriculumContentViews(curriculum, grade) : [];
}

export function getOlympiadDetails(id: string) {
  return getCurriculumByOlympiadId(id)?.details ?? null;
}

export function validateRegisteredCurricula() {
  return CURRICULA.map((curriculum) => ({
    olympiadId: curriculum.olympiadId,
    errors: validateCurriculum(curriculum),
  }));
}

export { getCurriculumLevelForGrade } from "./utils";
