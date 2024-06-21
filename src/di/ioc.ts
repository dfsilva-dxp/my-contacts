import { asFunction, asValue, createContainer } from "awilix";

import { contactsRepository } from "@/adapter/repository/contactsRepository";
import * as ContactsDataSource from "@/data/data-source/contactsDataSource";
import { getContactsUseCase } from "@/domain/useCases/contacts/getContacts";
import { useContactsListViewModel } from "@/presenter/containers/Home/view-models/homeViewModel";

const container = createContainer();

container.register({
  contactsRepository: asFunction(contactsRepository),

  homeViewModel: asFunction(useContactsListViewModel),

  contactsDataSource: asValue(ContactsDataSource),

  getContactsUseCase: asFunction(getContactsUseCase)
});

export const DI = container;
