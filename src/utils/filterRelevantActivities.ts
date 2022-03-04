import { Activity } from "../types/Types";
import expired from "./expired";

const IGNORE_LIST = ["Aa1", "Aa2", "Aa3", "Aa4", "Ta1", "Ta2", "Ta3", "Ta4"];

export default function filterRelevantActivities(activities: Activity[] | undefined): Activity[] | undefined {
  const relevantActivities = activities?.filter((activity) => (IGNORE_LIST.includes(activity.name) || expired(activity.date.end) ? false : activity));
  return relevantActivities;
}
