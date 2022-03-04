import styled from "styled-components/native";
import { Dimensions } from "react-native";

const DisciplineCardContainer = styled.View`
  width: ${Dimensions.get("screen").width - 30 + "px"};
  height: 150px;
  justify-content: space-between;
  margin: 0 auto 16px auto;
  border-radius: 8px;
  background-color: white;
  background-color: #1c2753;
  color: white;
`;

const DisciplineCardTitle = styled.View`
  flex: 1;
  flex-direction: row;
  /* align-items: center; */
  padding: 0 10px;
  justify-content: center;
  background-color: #3658d8;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardTitleWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const CardTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
  overflow: hidden;
  text-align: center;
  ${{ textAlignVertical: "center" }};
`;

const CardStatsWrapper = styled.View`
  flex: 1;
`;

export { DisciplineCardContainer, DisciplineCardTitle, CardTitle, CardStatsWrapper, CardTitleWrapper };
