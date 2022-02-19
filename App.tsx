import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

import { Course } from "./src/types/Types";

import useRequest from "./src/hooks/useRequest";
import extractCourses, { NewCourse } from "./src/utils/extractCourses";
import extractDisciplines from "./src/utils/extractDisciplines";
import DisciplineCard from "./src/components/DisciplineCard";

export default function App(): JSX.Element {
  const [data, requestData] = useRequest<Course[]>();
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  useEffect(() => {
    requestData();
  }, []);

  return (
    <View>
      <Picker mode="dropdown" selectedValue={selectedCourse} onValueChange={(itemValue) => setSelectedCourse(itemValue)}>
        {extractCourses(data)?.map(
          (course: NewCourse): JSX.Element => (
            <Picker.Item label={course.course} value={course} key={course.id} />
          )
        )}
      </Picker>
      <DisciplineCard discipline={extractDisciplines(data?.[0])} />
    </View>
  );
}
