import { useEffect } from "react";
import { View, Text } from "react-native";
import { Activity, Discipline } from "../../types/Types";

type DisciplineCardProps = {
  discipline: Discipline | undefined;
};

export default function DisciplineCard({ discipline }: DisciplineCardProps): JSX.Element {
  return (
    <View>
      <Text>{discipline?.name}</Text>
    </View>
  );
}
