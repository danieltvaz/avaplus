import styled from "styled-components/native";

const LoginContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 30px;
`;

const CredentialsInput = styled.TextInput`
  background: white;
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 0 10px;
  height: 30px;
`;

const CredentialsLabel = styled.Text`
  color: white;
  font-size: 22px;
  margin-bottom: 20px;
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
  margin: auto;
`;

export { CredentialsInput, CredentialsLabel, LoginContainer, Logo };
