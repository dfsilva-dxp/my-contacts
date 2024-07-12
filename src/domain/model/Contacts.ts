import { ContactFormData } from "@/presenter/containers/EditContact/view-models/useFormViewModel";
import { Id } from "./types";

export interface Contact {
  readonly id: Id;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly category_id: string | null;
  readonly category_name: string | null;
}

export type ContactResponse = Omit<Contact, "category_name">;

export interface UpdateContactFormData {
  readonly id: Id;
  readonly formData: ContactFormData;
}
