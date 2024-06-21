import { IContactsDataSource } from "@/domain/data/IContactsDataSource";

type Dependencies = {
  readonly contactsDataSource: IContactsDataSource;
};
export const contactsRepository = ({ contactsDataSource }: Dependencies) => {
  const get = () => contactsDataSource.getAll();

  return { get };
};
