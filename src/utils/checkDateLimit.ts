import convertToTimestamp from "./convertToTimestamp";

type Days = number;

export default function nearFinalPeriod(finalPeriod: string, limit: Days = 3): boolean {
  const limitInSeconds = limit! * 86400;
  const finalPeriodTimestamp: number = convertToTimestamp(finalPeriod);
  const now = new Date().getTime();

  if (now - finalPeriodTimestamp >= limitInSeconds) {
    return true;
  } else return false;
}
