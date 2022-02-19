import { Course, Discipline } from "../types/Types";

export default function extractDisciplines(course: Course | undefined): Discipline[] | undefined {
  const disciplines: Discipline[] | undefined = course?.semesters[0].subjects.map((subject: Discipline): Discipline => subject);
  return disciplines;
}
