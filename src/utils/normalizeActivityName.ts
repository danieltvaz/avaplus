export default function normalizeActivityName(activityName: string): string {
  const traceIndex = activityName.indexOf("-") - 1;

  const normalizedActivityName = traceIndex >= 0 ? activityName.slice(0, traceIndex) : activityName;
  return normalizedActivityName;
}
