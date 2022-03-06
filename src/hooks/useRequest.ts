import { useState } from "react";
import axios from "axios";
import { ToastAndroid } from "react-native";

type RequestData = (url: string, parameters: { username: string; password: string }) => Promise<any[]>;

export default function useRequest<T>(): [T | undefined, RequestData, (data: T) => void] {
  const [data, setData] = useState<T>();

  async function requestData(url: string, parameters: { username: string; password: string }) {
    try {
      const request = await axios.get(url, { data: { ...parameters } });
      setData(request.data);
      ToastAndroid.showWithGravity("Atualizado", ToastAndroid.LONG, ToastAndroid.CENTER);
      return request.data;
    } catch (e) {
      console.warn(e);
      ToastAndroid.showWithGravity("Temporariamente indisponível", ToastAndroid.LONG, ToastAndroid.CENTER);
    }
  }

  return [data, requestData, setData];
}
