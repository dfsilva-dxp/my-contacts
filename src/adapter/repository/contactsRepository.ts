import { IContactsDataSource } from "@/domain/data/IContactsDataSource";
import { ContactFormData } from "@/presenter/containers/EditContact/view-models/useFormViewModel";
import { UpdateContactFormData } from "@/domain/model/Contacts";
import { Id } from "@/domain/model/types";

type Dependencies = {
  readonly contactsDataSource: IContactsDataSource;
};
export const contactsRepository = ({ contactsDataSource }: Dependencies) => {
  const get = () => contactsDataSource.getAll();
  const getById = (contactId: Id) => contactsDataSource.getOne(contactId);
  const create = ({ name, email, phone, category_id }: ContactFormData) =>
    contactsDataSource.create({ name, email, phone, category_id });
  const update = ({ id, formData }: UpdateContactFormData) =>
    contactsDataSource.updateOne({ id, formData });
  const deleteById = (contactId: Id) => contactsDataSource.deleteOne(contactId);

  return { get, create, getById, update, deleteById };
};
