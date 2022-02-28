type Semester = {
  matriculation_id: string;
  semester_number: string;
  semester_name: string;
};

type Course = {
  name: string;
  semesters: Semester[];
};

type Activity = {
  name: string;
  date: { end: string; init: string };
};

type Discipline = {
  name: string;
  report_card_id: string;
  activities: Activity[];
};

export { Semester, Course, Discipline, Activity };
