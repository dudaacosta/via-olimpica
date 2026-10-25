export type CompletionInterval = {
  startMinute: number;
  endMinute: number;
  completedAt: string;
};

export type CompletionSlice = {
  startMinute: number;
  endMinute: number;
  completed: boolean;
};

function isValidBoundary(value: number): boolean {
  return Number.isSafeInteger(value) && value >= 0;
}

function assertRange(startMinute: number, endMinute: number): void {
  if (!isValidBoundary(startMinute) || !isValidBoundary(endMinute) || endMinute <= startMinute) {
    throw new RangeError(
      "O intervalo de progresso precisa usar minutos inteiros, não negativos e crescentes.",
    );
  }
}

export function sanitizeIntervals(value: unknown): CompletionInterval[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is CompletionInterval => {
      if (!item || typeof item !== "object") return false;
      const interval = item as Partial<CompletionInterval>;
      return (
        typeof interval.completedAt === "string" &&
        isValidBoundary(interval.startMinute as number) &&
        isValidBoundary(interval.endMinute as number) &&
        (interval.endMinute as number) > (interval.startMinute as number)
      );
    })
    .map((item) => ({ ...item }))
    .sort((a, b) => a.startMinute - b.startMinute || a.endMinute - b.endMinute);
}

export function completionCoverage(
  intervals: CompletionInterval[] | undefined,
): Array<{ startMinute: number; endMinute: number }> {
  const result: Array<{ startMinute: number; endMinute: number }> = [];
  for (const interval of sanitizeIntervals(intervals)) {
    const previous = result[result.length - 1];
    if (!previous || interval.startMinute > previous.endMinute) {
      result.push({ startMinute: interval.startMinute, endMinute: interval.endMinute });
    } else {
      previous.endMinute = Math.max(previous.endMinute, interval.endMinute);
    }
  }
  return result;
}

export function isRangeCompleted(
  intervals: CompletionInterval[] | undefined,
  startMinute: number,
  endMinute: number,
): boolean {
  assertRange(startMinute, endMinute);
  return completionCoverage(intervals).some(
    (interval) => interval.startMinute <= startMinute && interval.endMinute >= endMinute,
  );
}

export function completedMinutes(
  intervals: CompletionInterval[] | undefined,
  startMinute: number,
  endMinute: number,
): number {
  assertRange(startMinute, endMinute);
  return completionCoverage(intervals).reduce((total, interval) => {
    const start = Math.max(startMinute, interval.startMinute);
    const end = Math.min(endMinute, interval.endMinute);
    return total + Math.max(0, end - start);
  }, 0);
}

export function addCompletedRange(
  intervals: CompletionInterval[] | undefined,
  startMinute: number,
  endMinute: number,
  completedAt = new Date().toISOString(),
): CompletionInterval[] {
  assertRange(startMinute, endMinute);
  if (!completedAt) throw new Error("A conclusão precisa registrar uma data.");

  const current = sanitizeIntervals(intervals);
  const uncovered = splitRangeByCompletion(startMinute, endMinute, current)
    .filter((slice) => !slice.completed)
    .map((slice) => ({
      startMinute: slice.startMinute,
      endMinute: slice.endMinute,
      completedAt,
    }));

  return [...current, ...uncovered].sort(
    (a, b) => a.startMinute - b.startMinute || a.endMinute - b.endMinute,
  );
}

export function removeCompletedRange(
  intervals: CompletionInterval[] | undefined,
  startMinute: number,
  endMinute: number,
): CompletionInterval[] {
  assertRange(startMinute, endMinute);
  const result: CompletionInterval[] = [];

  for (const interval of sanitizeIntervals(intervals)) {
    if (interval.endMinute <= startMinute || interval.startMinute >= endMinute) {
      result.push(interval);
      continue;
    }
    if (interval.startMinute < startMinute) {
      result.push({
        startMinute: interval.startMinute,
        endMinute: startMinute,
        completedAt: interval.completedAt,
      });
    }
    if (interval.endMinute > endMinute) {
      result.push({
        startMinute: endMinute,
        endMinute: interval.endMinute,
        completedAt: interval.completedAt,
      });
    }
  }

  return result.sort((a, b) => a.startMinute - b.startMinute || a.endMinute - b.endMinute);
}

export function splitRangeByCompletion(
  startMinute: number,
  endMinute: number,
  intervals: CompletionInterval[] | undefined,
): CompletionSlice[] {
  assertRange(startMinute, endMinute);
  const coverage = completionCoverage(intervals);
  const boundaries = new Set<number>([startMinute, endMinute]);

  for (const interval of coverage) {
    if (interval.endMinute <= startMinute || interval.startMinute >= endMinute) continue;
    boundaries.add(Math.max(startMinute, interval.startMinute));
    boundaries.add(Math.min(endMinute, interval.endMinute));
  }

  const points = [...boundaries].sort((a, b) => a - b);
  const slices: CompletionSlice[] = [];
  for (let index = 0; index < points.length - 1; index++) {
    const sliceStart = points[index];
    const sliceEnd = points[index + 1];
    if (sliceEnd <= sliceStart) continue;
    slices.push({
      startMinute: sliceStart,
      endMinute: sliceEnd,
      completed: coverage.some(
        (interval) => interval.startMinute <= sliceStart && interval.endMinute >= sliceEnd,
      ),
    });
  }
  return slices;
}

export function sanitizeCompletionRecord(value: unknown): Record<string, CompletionInterval[]> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const result: Record<string, CompletionInterval[]> = {};
  for (const [contentKey, intervals] of Object.entries(value)) {
    if (!contentKey) continue;
    const sanitized = sanitizeIntervals(intervals);
    if (sanitized.length > 0) result[contentKey] = sanitized;
  }
  return result;
}
