import { Contact, ContactResponse } from "@/domain/model/Contacts";

import { axios } from "@/utils/common/services/axiosInstace";
import { PATHS } from "@/utils/common/constant/paths";
import { ContactFormData } from "@/presenter/components/Form";

export async function getAll(): Promise<Contact[]> {
  const { data } = await axios.get<Contact[]>(PATHS.CONTACTS);
  return data;
}

export async function create({
  name,
  email,
  phone,
  category_id
}: ContactFormData): Promise<ContactResponse> {
  const { data } = await axios.post<ContactResponse>(
    PATHS.CONTACTS,
    JSON.stringify({ name, email, phone, category_id })
  );
  return data;
}
