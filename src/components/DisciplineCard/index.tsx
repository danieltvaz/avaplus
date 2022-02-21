import { Text } from "react-native";
import { Activity, Discipline } from "../../types/Types";
import PagerView from "react-native-pager-view";

import {
  DisciplineCardContainer,
  DisciplineCardTitle,
  ActivitiesItem,
  ActivitiesName,
  ActivitiesPeriod,
  ActivitiesProgress,
  ActivitiesGrade,
} from "./styles";

import extractActivities from "../../utils/extractActivities";
import normalizeActivityName from "../../utils/normalizeActivityName";
import sortActivitiesPerPeriod from "../../utils/sortActivities";
import normalizeDisciplineName from "../../utils/normalizeDisciplineName";
import checkDateLimit from "../../utils/checkDateLimit";

type DisciplineCardProps = {
  discipline: Discipline | undefined;
};

const IGNORE_LIST = ["Aa1", "Aa2", "Aa3", "Aa4", "Ta1", "Ta2", "Ta3", "Ta4"];

export default function DisciplineCard({ discipline }: DisciplineCardProps): JSX.Element {
  const activities: Activity[] | undefined = extractActivities(discipline);
  const sortedActivitiesPerPeriod: Activity[] | undefined = sortActivitiesPerPeriod(activities);

  return (
    <DisciplineCardContainer style={{ elevation: 7 }}>
      <DisciplineCardTitle>{normalizeDisciplineName(discipline?.name)}</DisciplineCardTitle>
      <PagerView initialPage={0} style={{ flex: 1 }}>
        {sortedActivitiesPerPeriod?.map((activity: Activity, index: number) => (
          <ActivitiesItem key={index}>
            <ActivitiesName>{normalizeActivityName(activity.name)}</ActivitiesName>
            <ActivitiesPeriod
              limitDate={IGNORE_LIST.includes(normalizeActivityName(activity.name)) ? undefined : checkDateLimit(activity.period.final)}>
              Vencimento: {activity.period.final}
            </ActivitiesPeriod>
            {activity.completeness ? <ActivitiesProgress>Progresso: {activity.completeness}</ActivitiesProgress> : null}
            {activity.grade ? <ActivitiesGrade>Pontuação: {activity.grade?.current + "/" + activity.grade?.total}</ActivitiesGrade> : null}
          </ActivitiesItem>
        ))}
      </PagerView>
    </DisciplineCardContainer>
  );
}
