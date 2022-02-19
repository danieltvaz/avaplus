import { Text } from "react-native";
import { Activity, Discipline } from "../../types/Types";
import PagerView from "react-native-pager-view";

import { DisciplineCardContainer, DisciplineCardTitle, ActivitiesItem } from "./styles";

import extractActivities from "../../utils/extractActivities";
import normalizeActivityName from "../../utils/normalizeActivityName";
import sortActivitiesPerPeriod from "../../utils/sortActivities";

type DisciplineCardProps = {
  discipline: Discipline | undefined;
};

export default function DisciplineCard({ discipline }: DisciplineCardProps): JSX.Element {
  return (
    <DisciplineCardContainer style={{ elevation: 5 }}>
      <DisciplineCardTitle>{discipline?.name}</DisciplineCardTitle>
      <PagerView initialPage={0} style={{ flex: 1 }}>
        {sortActivitiesPerPeriod(extractActivities(discipline))?.map((activity: Activity, index: number) => (
          <ActivitiesItem key={index}>
            <Text>{normalizeActivityName(activity.name)}</Text>
            <Text>{activity.grade ? "Pontuação: " + activity.grade?.current + "/" + activity.grade?.total : null}</Text>
            <Text>{activity.completeness ? "Completude: " + activity.completeness : null}</Text>
            <Text>{activity.period.init + " / " + activity.period.final}</Text>
          </ActivitiesItem>
        ))}
      </PagerView>
    </DisciplineCardContainer>
  );
}
