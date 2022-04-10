import { Activity, Discipline } from "../types/Types";
import filterRelevantActivities from "./filterRelevantActivities";

export default function getAllEndingDates(disciplines: Discipline[]): string[] | undefined {
  let tempActivities: Activity[][] = [];

  disciplines.forEach((discipline) => tempActivities?.push(filterRelevantActivities(discipline.activities)));

  const allEndDates = tempActivities
    ?.flat()
    .map((activity) => activity?.date?.end)
    .filter((date, index, self) => self.indexOf(date) === index);

  return allEndDates;
}
