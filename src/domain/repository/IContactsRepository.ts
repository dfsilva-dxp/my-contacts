import { Contact } from "../model/Contacts";

export interface IContactsRepository {
  get: () => Promise<Contact[]>;
}
