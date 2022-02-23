import { useState } from "react";
import { Button } from "react-native";
import { CredentialsInput, CredentialsLabel, LoginContainer, Logo } from "./styles";
import { NavigationProp } from "@react-navigation/native";

export default function Login({ navigation }: { navigation: NavigationProp<any> }): JSX.Element {
  const [username, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) navigation.navigate("Home", { username: username, password: password });
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
