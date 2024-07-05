import { ContactFormData } from "@/presenter/components/Form";
import { Contact, ContactResponse } from "../model/Contacts";

export interface IContactsRepository {
  get: () => Promise<Contact[]>;
  create: ({
    name,
    email,
    phone,
    category_id
  }: ContactFormData) => Promise<ContactResponse>;
}
