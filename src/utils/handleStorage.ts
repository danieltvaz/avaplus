import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

export default function handleStorage<T>(): [(key: string, data: T) => Promise<void>, (key: string) => Promise<T> | null] {
  async function saveData<T>(key: string, data: T) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      ToastAndroid.showWithGravity("Erro ao salvar dados localmente", ToastAndroid.LONG, ToastAndroid.CENTER);
    }
  }
  async function getData(key: string) {
    try {
      const data = await AsyncStorage.getItem(key);
      const parsedData = data ? JSON.parse(data) : undefined;
      return parsedData;
    } catch (e) {
      ToastAndroid.showWithGravity("Erro ao recuperar dados locais", ToastAndroid.LONG, ToastAndroid.CENTER);
    }
  }

  return [saveData, getData];
}
