import { StyleSheet, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

import { Course, Discipline } from "./src/types/Types";

import useRequest from "./src/hooks/useRequest";
import extractCourses, { NewCourse } from "./src/utils/extractCourses";
import extractDisciplines from "./src/utils/extractDisciplines";
import DisciplineCard from "./src/components/DisciplineCard";

export default function App(): JSX.Element {
  const [data, requestData] = useRequest<Course[]>();
  const [selectedCourse, setSelectedCourse] = useState<number>(0);

  useEffect(() => {
    requestData();
  }, []);

  useEffect(() => console.warn(selectedCourse), [selectedCourse]);

  return (
    <SafeAreaView>
      <Picker
        mode="dialog"
        selectedValue={selectedCourse}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedCourse(itemValue);
        }}
        key={1}>
        {extractCourses(data)?.map(
          (course: NewCourse, index: number): JSX.Element => (
            <Picker.Item label={course.course} value={course.id} key={index} />
          )
        )}
      </Picker>
      {extractDisciplines(data?.[selectedCourse])?.map(
        (discipline: Discipline, index: number): JSX.Element => (
          <DisciplineCard discipline={discipline} key={index} />
        )
      )}
    </SafeAreaView>
  );
}
