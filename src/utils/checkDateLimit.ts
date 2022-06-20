import convertToTimestamp from "./convertToTimestamp";

type Days = number;

export default function nearFinalPeriod(finalPeriod: string, limit: Days = 3): boolean {
  if (!finalPeriod) return false;
  const limitInMiliseconds = limit * 86400000;
  const finalPeriodTimestamp: number = convertToTimestamp(finalPeriod);
  const now = new Date().getTime();

  if (finalPeriodTimestamp - now <= limitInMiliseconds) {
    return true;
  }
  return false;
}
