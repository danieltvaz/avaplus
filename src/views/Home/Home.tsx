import { Picker } from "@react-native-picker/picker";
import { FlatList } from "react-native";
import { Course, Discipline } from "../../types/Types";
import extractCourses, { NewCourse } from "../../utils/extractCourses";
import extractDisciplines from "../../utils/extractDisciplines";
import DisciplineCard from "../../components/DisciplineCard";
import { useEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import useRequest from "../../hooks/useRequest";
import { HomeWrapper } from "./styles";
import Loading from "../../components/Loading";

type RootStackParamList = {
  Login?: object;
  Home: { username: string; password: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ route }: Props) {
  const [selectedCourse, setSelectedCourse] = useState<number>(0);
  const [data, requestData] = useRequest<Course[]>();
  const [isActive, setIsActive] = useState(true);
  const { username, password } = route.params;

  useEffect(() => {
    requestData("http://192.168.209.1:5000/courses", { username, password });
  });

  useEffect(() => {
    data && data.length > 0 ? setIsActive(false) : null;
  }, [data]);

  return (
    <HomeWrapper>
      <Loading isActive={isActive} />
      <Picker
        style={{ color: "white" }}
        dropdownIconColor={"white"}
        mode="dropdown"
        selectedValue={selectedCourse}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedCourse(itemValue);
        }}>
        {extractCourses(data)?.map(
          (course: NewCourse, index: number): JSX.Element => (
            <Picker.Item label={course.course} value={course.id} key={course.id} />
          )
        )}
      </Picker>
      <FlatList
        data={extractDisciplines(data?.[selectedCourse])}
        renderItem={({ item, index }: { item: Discipline; index: number }) => <DisciplineCard discipline={item} key={index} />}
      />
    </HomeWrapper>
  );
}
