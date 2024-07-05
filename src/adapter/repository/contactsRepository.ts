import { IContactsDataSource } from "@/domain/data/IContactsDataSource";
import { ContactFormData } from "@/presenter/components/Form";

type Dependencies = {
  readonly contactsDataSource: IContactsDataSource;
};
export const contactsRepository = ({ contactsDataSource }: Dependencies) => {
  const get = () => contactsDataSource.getAll();
  const create = ({ name, email, phone, category_id }: ContactFormData) =>
    contactsDataSource.create({ name, email, phone, category_id });

  return { get, create };
};
