import { ContactResponse } from "@/domain/model/Contacts";
import { UseCaseWithParams } from "@/domain/model/types";
import { IContactsRepository } from "@/domain/repository/IContactsRepository";
import { ContactFormData } from "@/presenter/components/Form";

type Dependencies = {
  readonly contactsRepository: IContactsRepository;
};

export const createContactUseCase = ({
  contactsRepository
}: Dependencies): UseCaseWithParams<ContactResponse, ContactFormData> => ({
  execute: ({ name, email, phone, category_id }) =>
    contactsRepository.create({ name, email, phone, category_id })
});
