import { Contact } from "@/domain/model/Contacts";

import { axios } from "@/utils/common/services/axiosInstace";
import { PATHS } from "@/utils/common/constant/paths";

export async function getAll(): Promise<Contact[]> {
  const { data } = await axios.get<Contact[]>(PATHS.CONTACTS.ALL);
  return data;
}
