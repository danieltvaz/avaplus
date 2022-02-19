type Activity = {
  code: string[];
  completeness: null | string;
  grade: null | {
    current: string;
    total: string;
  };
  name: string;
  period: {
    final: string;
    init: string;
  };
};

type Discipline = {
  name: string;
  panels: Activity[];
};

type Semester = {
  $activitiesId: string;
  subjects: Discipline[];
};

type Course = {
  course: string;
  semesters: Semester[];
};

export { Activity, Discipline, Semester, Course };
