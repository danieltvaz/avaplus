import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar, SafeAreaView } from "react-native";

import { Course } from "./src/types/Types";

import useRequest from "./src/hooks/useRequest";

import Home from "./src/views/Home/Home";
import Login from "./src/views/Login/Login";
import { useEffect } from "react";

import Reactotron from "reactotron-react-native";

Reactotron.configure() // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

export default function App(): JSX.Element {
  const [data, requestData] = useRequest<Course[]>();

  const requestDataWithCredentials = (username: string, password: string): void => {
    requestData("http://192.168.209.1:5000/courses", { username, password });
  };

  useEffect(() => console.log(data), [data]);

  return (
    <SafeAreaView style={{ padding: 8, flex: 1, backgroundColor: "#1a254ed5" }}>
      <StatusBar barStyle={"default"} />
      {/* <Home data={data} /> */}
      <Login buttonFunction={requestDataWithCredentials} />
    </SafeAreaView>
  );
}
