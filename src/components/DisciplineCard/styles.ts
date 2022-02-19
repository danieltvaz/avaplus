import styled from "styled-components/native";
import { Dimensions } from "react-native";

const DisciplineCardContainer = styled.View`
  width: ${Dimensions.get("screen").width + "px"};
  height: 150px;
  margin-bottom: 15px;
  background-color: white;
`;

const DisciplineCardTitle = styled.Text``;

const ActivitiesItem = styled.View``;

export { DisciplineCardContainer, DisciplineCardTitle, ActivitiesItem };
