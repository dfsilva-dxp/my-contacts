import { Contact } from "@/domain/model/Contacts";
import { Id, UseCaseWithParams } from "@/domain/model/types";
import { IContactsRepository } from "@/domain/repository/IContactsRepository";

type Dependencies = {
  readonly contactsRepository: IContactsRepository;
};

export const getContactUseCase = ({
  contactsRepository
}: Dependencies): UseCaseWithParams<Contact, Id> => ({
  execute: (contactId: string) => contactsRepository.getById(contactId)
});
