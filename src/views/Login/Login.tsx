import { useState } from "react";
import { Button } from "react-native";
import { CredentialsInput, CredentialsLabel, LoginContainer, Logo } from "./styles";

type LoginProps = {
  buttonFunction: (login: string, password: string) => void;
};

export default function Login({ buttonFunction }: LoginProps): JSX.Element {
  const [username, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) buttonFunction(username, password);
  };

  return (
    <LoginContainer>
      <Logo source={require("../../assets/logo.png")} />
      <CredentialsLabel>Login</CredentialsLabel>
      <CredentialsInput value={username} onChangeText={setLogin} style={{ backgroundColor: "white" }} />
      <CredentialsLabel>Senha</CredentialsLabel>
      <CredentialsInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Logar" onPress={handleLogin} />
    </LoginContainer>
  );
}
