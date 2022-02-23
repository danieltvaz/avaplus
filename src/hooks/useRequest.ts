import { useState } from "react";
import axios from "axios";
import { api } from "./data";

type RequestData = (url: string, parameters: { username: string; password: string }) => Promise<void>;

export default function useRequest<T>(): [T | undefined, RequestData] {
  const [data, setData] = useState<T>();

  async function requestData(url: string, parameters: { username: string; password: string }): Promise<void> {
    // try {
    //   const instance = axios.create({
    //     timeout: 360000,
    //   });
    //   console.log("starting request");
    //   const request = await instance.post(url, parameters);
    //   setData(request.data);
    //   console.log("end request");
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
