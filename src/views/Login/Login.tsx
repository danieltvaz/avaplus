import { useState, useRef } from "react";
import { Button } from "react-native";
import { CredentialsInput, CredentialsLabel, LoginContainer, Logo } from "./styles";
import { NavigationProp } from "@react-navigation/native";

import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Login({ navigation }: { navigation: NavigationProp<any> }): JSX.Element {
  const [username, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
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
