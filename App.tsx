import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, SafeAreaView } from "react-native";

import { Course } from "./src/types/Types";

import Home from "./src/views/Home/Home";
import Login from "./src/views/Login/Login";

import Reactotron, { asyncStorage } from "reactotron-react-native";
import Debug from "./src/views/Debug";

Reactotron.configure().useReactNative().connect();

type RootStackParamList = {
  Login?: object;
  Home: { data: Course[] };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
``;
export default function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1a254e" }}>
      <NavigationContainer>
        <StatusBar barStyle={"default"} />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
