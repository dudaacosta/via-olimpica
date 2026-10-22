/** Fonte unica dos rotulos e minutos usados no Quiz, Perfil e Cronograma. */
export const DAILY_TIME_OPTIONS = [
  { value: "30 min", minutes: 30 },
  { value: "45 min", minutes: 45 },
  { value: "1 hora", minutes: 60 },
  { value: "1h30", minutes: 90 },
  { value: "2 horas", minutes: 120 },
  { value: "3 horas", minutes: 180 },
] as const;

export const DAILY_TIME = DAILY_TIME_OPTIONS.map((option) => option.value);
export const DEFAULT_DAILY_MINUTES = 60;

/**
 * Mantem o contrato de strings do store. Valores ausentes/invalidos usam 60 min,
 * o padrao anterior, em vez de gerar NaN ou sessoes de zero minutos.
 * Numeros sem unidade continuam representando horas por compatibilidade.
 */
export function parseDailyTime(dailyTime: string | null | undefined): number {
  if (typeof dailyTime !== "string") return DEFAULT_DAILY_MINUTES;
  const value = dailyTime.toLowerCase().trim().replace(/\s+/g, " ");
  const option = DAILY_TIME_OPTIONS.find((item) => item.value === value);
  if (option) return option.minutes;

  const validMinutes = (minutes: number): number => {
    const rounded = Math.round(minutes);
    return Number.isSafeInteger(rounded) && rounded > 0
      ? rounded
      : DEFAULT_DAILY_MINUTES;
  };

  // Verificar horas + minutos ANTES de aceitar apenas a parte das horas.
  const mixed = value.match(/^(\d+)\s*(?:h|horas?)\s*(?:e\s*)?(\d{1,2})\s*(?:min(?:uto)?s?)?$/);
  if (mixed) {
    const minutes = Number(mixed[2]);
    if (minutes >= 60) return DEFAULT_DAILY_MINUTES;
    return validMinutes(Number(mixed[1]) * 60 + minutes);
  }
  const hours = value.match(/^(\d+(?:[.,]\d+)?)\s*(?:h|horas?)$/);
  if (hours) return validMinutes(Number(hours[1].replace(",", ".")) * 60);
  const minutes = value.match(/^(\d+)\s*min(?:uto)?s?$/);
  if (minutes) return validMinutes(Number(minutes[1]));
  if (/^\d+(?:[.,]\d+)?$/.test(value)) {
    return validMinutes(Number(value.replace(",", ".")) * 60);
  }
  return DEFAULT_DAILY_MINUTES;
}

export function normalizeDailyTimeLabel(value: string | null): string {
  const minutes = parseDailyTime(value);
  return DAILY_TIME_OPTIONS.find((option) => option.minutes === minutes)?.value
    ?? value
    ?? "1 hora";
}

export function formatMinutes(minutes: number): string {
  if (!Number.isSafeInteger(minutes) || minutes < 0) {
    throw new RangeError("A duração deve ser um número inteiro não negativo de minutos.");
  }
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (!hours) return `${rest} min`;
  return rest ? `${hours}h${String(rest).padStart(2, "0")}` : `${hours}h`;
}
