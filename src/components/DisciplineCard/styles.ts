import styled from "styled-components/native";
import { Dimensions } from "react-native";

const DisciplineCardContainer = styled.View`
  width: ${Dimensions.get("screen").width - 30 + "px"};
  height: 150px;
  margin: 0 auto 16px auto;
  border-radius: 8px;
  background-color: white;
  background-color: #1c2753;
  color: white;
`;

const DisciplineCardTitle = styled.Text`
  min-height: 30px;
  text-align: center;
  background-color: #3658d8;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  ${{ textAlignVertical: "center" }};
`;

export { DisciplineCardContainer, DisciplineCardTitle };
