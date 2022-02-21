import { useState } from "react";
import axios from "axios";
import { api } from "./data";

type Request = (url?: string) => Promise<void>;

export default function useRequest<T>(): [T | undefined, Request] {
  const [data, setData] = useState<T>();

  async function requestData(url: string = "data.json"): Promise<void> {
    // try {
    //   const request = await axios.get(url);
    //   setData(request.data);
    // } catch (e) {
    //   console.warn(e);
    // }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(setData(api as unknown as T));
      }, 1000);
    });
  }

  return [data, requestData];
}

// try {
//   const request = await axios.get(url);
//   console.log(request.data);
// } catch (e) {
//   console.warn(e);
// }

// como evitar q o resultado seja undefined
// pode ser, mas nao quer dizer que deve ser
