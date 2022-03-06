import { FlatList } from "react-native";
import { Course, Discipline } from "../../types/Types";
import { SetStateAction, useEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import useRequest from "../../hooks/useRequest";
import { HomeWrapper } from "./styles";
import Loading from "../../components/Loading";
import CoursePicker from "../../components/CoursePicker";
import DisciplineCard from "../../components/DisciplineCard";
import handleStorage from "../../utils/handleStorage";

type RootStackParamList = {
  Login?: object;
  Home: { username: string; password: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const [saveDisciplines, getCachedDisciplines] = handleStorage<Discipline[]>();

export default function Home({ route }: Props) {
  const [disciplines, requestDisciplines, setDisciplines] = useRequest<Discipline[]>();
  const [isLoading, setIsActive] = useState(true);
  const [softLoading, setSoftLoading] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>("");

  const { username, password } = route.params;

  async function handleCourseSource() {
    try {
      const cachedDisciplines = await getCachedDisciplines(selectedCourseId);
      if (cachedDisciplines && cachedDisciplines.length > 0) {
        setDisciplines(cachedDisciplines);
      } else {
        await requestDisciplines(`http://192.168.0.100:5000/dashboard/subjects/${selectedCourseId}`, { username, password });
      }
    } catch (e) {}
  }

  async function refreshList() {
    setSoftLoading(true);
    try {
      await requestDisciplines(`http://192.168.0.100:5000/dashboard/subjects/${selectedCourseId}`, { username, password });
      setSoftLoading(false);
    } catch (e) {
      setSoftLoading(false);
    }
  }

  useEffect(() => {
    selectedCourseId && handleCourseSource();
  }, [selectedCourseId]);

  useEffect(() => {
    if (selectedCourseId && disciplines && disciplines.length > 0) {
      setIsActive(false);
      saveDisciplines(selectedCourseId, disciplines);
    }
  }, [disciplines]);

  return (
    <HomeWrapper>
      <Loading isActive={isLoading} />
      <CoursePicker selectedCourseId={selectedCourseId} setSelectedCourseId={setSelectedCourseId} />
      <FlatList
        data={disciplines}
        renderItem={({ item, index }: { item: Discipline; index: number }) => (
          <DisciplineCard discipline={item} courseId={selectedCourseId} key={index} />
        )}
        keyExtractor={(item) => item.report_card_id}
        refreshing={softLoading}
        onRefresh={refreshList}
      />
    </HomeWrapper>
  );
}
