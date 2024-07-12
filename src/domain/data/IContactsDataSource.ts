import { ContactFormData } from "@/presenter/containers/EditContact/view-models/useFormViewModel";
import {
  Contact,
  ContactResponse,
  UpdateContactFormData
} from "../model/Contacts";

export type IContactsDataSource = {
  readonly getAll: () => Promise<Contact[]>;
  readonly getOne: (contactId: string) => Promise<Contact>;
  readonly create: ({
    name,
    email,
    phone,
    category_id
  }: ContactFormData) => Promise<ContactResponse>;
  readonly updateOne: ({
    id,
    formData
  }: UpdateContactFormData) => Promise<ContactResponse>;
};
