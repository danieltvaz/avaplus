import styled from "styled-components/native";

const ActivitiesItem = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: 8px;
  ${{ textAlignVertical: "top" }};
`;

const ActivitiesName = styled.Text`
  font-size: 14px;
  color: white;
  height: 30px;
`;

type PeriodProps = {
  limitDate: boolean | undefined;
};

const ActivitiesPeriod = styled.Text<PeriodProps>`
  color: ${({ limitDate }) => (limitDate ? "red" : "white")};
  height: 30px;
`;

const ActivitiesProgress = styled.Text`
  color: white;
`;

const ActivitiesGrade = styled.Text`
  color: white;
`;

export { ActivitiesItem, ActivitiesName, ActivitiesPeriod, ActivitiesProgress, ActivitiesGrade };
