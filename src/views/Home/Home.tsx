import { FlatList } from "react-native";
import { Course, Discipline } from "../../types/Types";
import { useEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import useRequest from "../../hooks/useRequest";
import { HomeWrapper } from "./styles";
import Loading from "../../components/Loading";
import CoursePicker from "../../components/CoursePicker";
import DisciplineCard from "../../components/DisciplineCard";

type RootStackParamList = {
  Login?: object;
  Home: { username: string; password: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ route }: Props) {
  const [disciplines, requestDisciplines] = useRequest<Discipline[]>();
  const [isActive, setIsActive] = useState(true);
  const [selectedCourseId, setSelectedCourseId] = useState<string>("");

  const { username, password } = route.params;

  useEffect(() => {
    selectedCourseId && requestDisciplines(`http://192.168.0.100:5000/dashboard/subjects/${selectedCourseId}`, { username, password });
  }, [selectedCourseId]);

  useEffect(() => {
    if (selectedCourseId && disciplines && disciplines.length > 0) {
      setIsActive(false);
    }
  }, [disciplines]);

  return (
    <HomeWrapper>
      <Loading isActive={isActive} />
      <CoursePicker selectedCourseId={selectedCourseId} setSelectedCourseId={setSelectedCourseId} />
      <FlatList
        data={disciplines}
        renderItem={({ item, index }: { item: Discipline; index: number }) => <DisciplineCard discipline={item} key={index} />}
        keyExtractor={(item) => item.report_card_id}
      />
    </HomeWrapper>
  );
}
