import { Discipline, Activity } from "../types/Types";

export default function extractActivities(discipline: Discipline | undefined): Activity[] | undefined {
  const activities: Activity[] | undefined = discipline?.panels?.map((activity): Activity => activity);

  return activities;
}
