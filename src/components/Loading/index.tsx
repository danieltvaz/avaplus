import styled from "styled-components/native";
import { Dimensions } from "react-native";

type Props = { isActive: boolean };

const LoadingWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  background: #1a254e;
  width: ${Dimensions.get("screen").width + "px"};
  height: ${Dimensions.get("screen").height + "px"};
  z-index: 999;
  flex: 1;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-size: 32px;
  color: white;
  text-align: center;
`;

const ComplementaryText = styled.Text`
  font-size: 18px;
  color: white;
  text-align: center;
`;

export default function Loading({ isActive }: Props) {
  return (
    <>
      {isActive ? (
        <LoadingWrapper>
          <LoadingText>Carregando dados...</LoadingText>
          <ComplementaryText>isto pode levar um tempo.</ComplementaryText>
        </LoadingWrapper>
      ) : null}
    </>
  );
}
