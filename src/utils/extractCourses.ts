import { Course } from "../types/Types";

export type NewCourse = { course: string; id: number };

export default function extractCourses(courses: Course[] | undefined): NewCourse[] | undefined {
  const newCourses = courses?.map((c: Course, i: number): NewCourse => ({ course: c.course, id: i }));

  return newCourses;
}
