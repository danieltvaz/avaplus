import { Discipline } from "../../types/Types";
import PagerView from "react-native-pager-view";

import { DisciplineCardContainer, DisciplineCardTitle, CardTitle, CardStatsWrapper, CardTitleWrapper } from "./styles";

import ActivityCard from "../ActivityCard";
import filterRelevantActivities from "../../utils/filterRelevantActivities";

type DisciplineCardProps = {
  discipline: Discipline | undefined;
  courseId: string;
};

const IGNORE_LIST = ["Aa1", "Aa2", "Aa3", "Aa4", "Ta1", "Ta2", "Ta3", "Ta4"];

export default function DisciplineCard({ discipline, courseId }: DisciplineCardProps): JSX.Element {
  return (
    <DisciplineCardContainer style={{ elevation: 7 }}>
      <DisciplineCardTitle>
        <CardTitleWrapper>
          <CardTitle>{discipline?.name}</CardTitle>
        </CardTitleWrapper>
      </DisciplineCardTitle>
      <PagerView initialPage={0} style={{ flex: 1 }}>
        {filterRelevantActivities(discipline?.activities)?.map((activity, index) => (
          <ActivityCard activity={activity} key={index} />
        ))}
      </PagerView>
    </DisciplineCardContainer>
  );
}
