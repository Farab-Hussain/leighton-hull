export const DATE_FORMAT = "yyyy-MM-dd";

export function getTodayUTCDate(): Date {
  const now = new Date();

  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}
