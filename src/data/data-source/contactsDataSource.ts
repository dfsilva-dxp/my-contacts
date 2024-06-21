import AxiosService from "@/utils/common/services/axiosService";

import { Contact } from "@/domain/model/Contacts";

import { PATHS } from "@/utils/common/constant/paths";

const axiosService = new AxiosService(import.meta.env.VITE_BASE_URL);
const axios = axiosService.create();

export async function getAll(): Promise<Contact[]> {
  const { data } = await axios.get<Contact[]>(PATHS.CONTACTS);
  return data;
}
