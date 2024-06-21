import { Contact } from "../model/Contacts";

export type IContactsDataSource = {
  readonly getAll: () => Promise<Contact[]>;
};
