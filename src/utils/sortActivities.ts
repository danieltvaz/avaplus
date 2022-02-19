import { Activity } from "../types/Types";
import convertToTimestamp from "./convertToTimestamp";

export default function sortActivitiesPerPeriod(activities: Activity[] | undefined): Activity[] | undefined {
  const sortedActivities: Activity[] | undefined = activities?.sort(
    (a: Activity, b: Activity) => convertToTimestamp(a.period.final) - convertToTimestamp(b.period.final)
  );
  return sortedActivities;
}
