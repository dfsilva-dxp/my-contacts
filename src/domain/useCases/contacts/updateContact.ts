import { UpdateContactFormData } from "@/domain/model/Contacts";
import { IContactsRepository } from "@/domain/repository/IContactsRepository";

type Dependencies = {
  readonly contactsRepository: IContactsRepository;
};

export const updateContactUseCase = ({ contactsRepository }: Dependencies) => ({
  execute: ({ id, formData }: UpdateContactFormData) =>
    contactsRepository.update({ id, formData })
});
