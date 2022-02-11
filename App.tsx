import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

export default function App() {
  const [select, setSelect] = useState("ADS");
  return (
    <View>
      <Picker mode="dropdown" selectedValue={select} onValueChange={(itemValue) => setSelect(itemValue)}>
        <Picker.Item label="ADS" value="Análise e desenvolvimento de sistemas" />
        <Picker.Item label="GPI" value="Gestão da produção Industrial" />
      </Picker>
      <StatusBar style="auto" />
    </View>
  );
}
