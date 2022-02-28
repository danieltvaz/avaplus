import { useState } from "react";
import axios from "axios";
import { api } from "./alldata";
import activities from "./activities";
import courses from "./courses";

type RequestData = (url: string, parameters: { username: string; password: string }) => Promise<void>;

export default function useRequest<T>(): [T | undefined, RequestData] {
  const [data, setData] = useState<T>();

  async function requestData(url: string, parameters: { username: string; password: string }): Promise<void> {
    try {
      const request = await axios.get(url);
      setData(request.data);
    } catch (e) {
      console.warn(e);
    }
  }

  return [data, requestData];
}

// como evitar q o resultado seja undefined
// pode ser, mas nao quer dizer que deve ser
