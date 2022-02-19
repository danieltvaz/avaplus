import { useEffect } from "react";
import { View, Text } from "react-native";
import { Activity, Discipline } from "../../types/Types";

type DisciplineCardProps = {
  discipline: Discipline[] | undefined;
};

export default function DisciplineCard({ discipline }: DisciplineCardProps): JSX.Element {
  useEffect(() => console.log(discipline), []);
  return <View></View>;
}
