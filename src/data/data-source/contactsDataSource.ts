import {
  Contact,
  ContactResponse,
  UpdateContactFormData
} from "@/domain/model/Contacts";

import { axios } from "@/utils/common/services/axiosInstace";
import { PATHS } from "@/utils/common/constant/paths";

import { ContactFormData } from "@/presenter/containers/EditContact/view-models/useFormViewModel";
import { Id } from "@/domain/model/types";

export async function getAll(): Promise<Contact[]> {
  const { data } = await axios.get<Contact[]>(PATHS.CONTACTS);
  return data;
}

export async function getOne(contactId: Id): Promise<Contact> {
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

export async function deleteOne(contactId: Id): Promise<Contact[]> {
  const { data } = await axios.delete(`${PATHS.CONTACTS}/${contactId}`);

  if (data.status === "deleted") {
    return getAll();
  }

  return [];
}
