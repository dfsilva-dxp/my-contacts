import { Contact } from "@/domain/model/Contacts"
import { UseCase } from "@/domain/model/types"
import { IContactsRepository } from "@/domain/repository/IContactsRepository"

type Dependencies = {
  readonly contactsRepository: IContactsRepository
}

export const getContactsUseCase = ({contactsRepository}: Dependencies): UseCase<Contact[]> => ({
  execute: () => contactsRepository.get()
})