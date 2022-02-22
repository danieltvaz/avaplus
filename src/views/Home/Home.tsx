import { Picker } from "@react-native-picker/picker";
import { FlatList } from "react-native";
import { Course, Discipline } from "../../types/Types";
import useRequest from "../../hooks/useRequest";
import extractCourses, { NewCourse } from "../../utils/extractCourses";
import extractDisciplines from "../../utils/extractDisciplines";
import DisciplineCard from "../../components/DisciplineCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, requestData] = useRequest<Course[]>();
  const [selectedCourse, setSelectedCourse] = useState<number>(0);

  useEffect(() => {
    requestData();
  }, []);

  return (
    <>
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
    </>
  );
}
