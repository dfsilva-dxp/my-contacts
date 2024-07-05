import { ContactFormData } from "@/presenter/components/Form";
import { Contact, ContactResponse } from "../model/Contacts";

export type IContactsDataSource = {
  readonly getAll: () => Promise<Contact[]>;
  readonly create: ({
    name,
    email,
    phone,
    category_id
  }: ContactFormData) => Promise<ContactResponse>;
};
