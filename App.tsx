import { Dimensions, FlatList, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";

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

  // useEffect(() => console.warn(selectedCourse), [selectedCourse]);

  return (
    <SafeAreaView style={{ padding: 8, flex: 1, backgroundColor: "#1A254E" }}>
      <StatusBar barStyle={"default"} />
      <Picker
        style={{ color: "white" }}
        dropdownIconColor={"white"}
        mode="dropdown"
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
      <FlatList
        data={extractDisciplines(data?.[selectedCourse])}
        renderItem={({ item, index }: { item: Discipline; index: number }) => <DisciplineCard discipline={item} key={index} />}
      />
    </SafeAreaView>
  );
}
