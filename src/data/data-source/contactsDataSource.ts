import {
  Contact,
  ContactResponse,
  UpdateContactFormData
} from "@/domain/model/Contacts";

import { axios } from "@/utils/common/services/axiosInstace";
import { PATHS } from "@/utils/common/constant/paths";

import { ContactFormData } from "@/presenter/containers/EditContact/view-models/useFormViewModel";

export async function getAll(): Promise<Contact[]> {
  const { data } = await axios.get<Contact[]>(PATHS.CONTACTS);
  return data;
}

export async function getOne(contactId: string): Promise<Contact> {
  const { data } = await axios.get<Contact>(`${PATHS.CONTACTS}/${contactId}`);
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

export async function updateOne({
  id,
  formData
}: UpdateContactFormData): Promise<ContactResponse> {
  const { data } = await axios.put<ContactResponse>(
    `${PATHS.CONTACTS}/${id}`,
    JSON.stringify(formData)
  );
  return data;
}
