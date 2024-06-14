import { AxiosInstance } from "axios";
import AxiosService from "./axiosService";

import { IContact } from "@/components/ContactTable/types";

class HttpClient {
  axiosService: AxiosService;
  axios: AxiosInstance;

  constructor() {
    this.axiosService = new AxiosService(import.meta.env.VITE_BASE_URL);
    this.axios = this.axiosService.create();
  }

  async get(endpoint: string) {
    const { data } = await this.axios.get<IContact[]>(endpoint);
    return data;
  }
}

export default new HttpClient();
