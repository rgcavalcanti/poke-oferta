import api from "config/axios";
import { HTTPGetClient } from "data/protocols/HTTPGetClient";

export class AxiosHttpGetClient<P, R> extends HTTPGetClient<P, R> {
  async execute(): Promise<R> {
    const response = await api.get<R>(this.url, { params: this.params })
    return response.data
  }
}