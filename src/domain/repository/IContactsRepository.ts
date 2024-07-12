import { ContactFormData } from "@/presenter/containers/EditContact/view-models/useFormViewModel";
import {
  Contact,
  ContactResponse,
  UpdateContactFormData
} from "../model/Contacts";

export interface IContactsRepository {
  get: () => Promise<Contact[]>;
  getById: (contactId: string) => Promise<Contact>;
  create: ({
    name,
    email,
    phone,
    category_id
  }: ContactFormData) => Promise<ContactResponse>;
  update: ({ id, formData }: UpdateContactFormData) => Promise<ContactResponse>;
}
