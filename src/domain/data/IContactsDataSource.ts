import { ContactFormData } from "@/presenter/containers/EditContact/view-models/useFormViewModel";
import {
  Contact,
  ContactResponse,
  UpdateContactFormData
} from "../model/Contacts";
import { Id } from "../model/types";

export type IContactsDataSource = {
  readonly getAll: () => Promise<Contact[]>;
  readonly getOne: (contactId: Id) => Promise<Contact>;
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
  readonly deleteOne: (contactId: Id) => Promise<Contact[]>;
};
