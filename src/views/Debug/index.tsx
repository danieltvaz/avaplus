import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Course, Discipline } from "../../types/Types";
import handleStorage from "../../utils/handleStorage";

const [saveDisciplines, getDisciplines] = handleStorage<Discipline[]>();
const [saveCoursesList, getCoursesList] = handleStorage<Course[]>();

export default function Debug() {
  const [disciplines, setDisciplines] = useState<Discipline[]>();
  const [coursesList, setCoursesList] = useState<Course[]>();

  async function renderStorage() {
    const cachedDisciplines = (await getDisciplines("3000411703")) ?? undefined;
    console.log(cachedDisciplines);
    setDisciplines(cachedDisciplines);
    const cachedCoursesList = (await getCoursesList("coursesList")) ?? undefined;
    console.log(cachedCoursesList);
    setCoursesList(cachedCoursesList);
  }

  useEffect(() => {
    renderStorage();
  }, []);
  return (
    <View>
      <Text>{disciplines?.length}</Text>
      <Text>{coursesList?.length}</Text>
    </View>
  );
}
