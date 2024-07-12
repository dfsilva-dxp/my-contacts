import { asFunction, asValue, createContainer } from "awilix";

/**
 * Contacts information
 */
import { contactsRepository } from "@/adapter/repository/contactsRepository";
import { useGetContactViewModel } from "@/presenter/containers/EditContact/view-models/getContactViewModel";
import { useContactsListViewModel } from "@/presenter/containers/Home/view-models/homeViewModel";
import { useNewContactViewModel } from "@/presenter/containers/NewContact/view-models/newContactViewModel";
import { useUpdateContactViewModel } from "@/presenter/containers/EditContact/view-models/useUpdateContactViewModel";
import * as ContactsDataSource from "@/data/data-source/contactsDataSource";
import { getContactsUseCase } from "@/domain/useCases/contacts/getContacts";
import { getContactUseCase } from "@/domain/useCases/contacts/getContact";
import { createContactUseCase } from "@/domain/useCases/contacts/createContact";
import { updateContactUseCase } from "@/domain/useCases/contacts/updateContact";

/**
 * Categories information
 */
import { categoriesRepository } from "@/adapter/repository/categoriesRepository";
import { useGetCategoriesViewModel } from "@/presenter/containers/NewContact/view-models/getCategoriesViewModel";
import * as CategoriesDataSource from "@/data/data-source/categoriesDataSource";
import { getCategoriesUseCase } from "@/domain/useCases/categories/getCategories";

const container = createContainer();

container.register({
  contactsRepository: asFunction(contactsRepository),
  categoriesRepository: asFunction(categoriesRepository),

  homeViewModel: asFunction(useContactsListViewModel),
  newContactViewModel: asFunction(useNewContactViewModel),
  getContactViewModel: asFunction(useGetContactViewModel),
  getCategoriesViewModel: asFunction(useGetCategoriesViewModel),
  updateContactViewModel: asFunction(useUpdateContactViewModel),

  contactsDataSource: asValue(ContactsDataSource),
  categoriesDataSource: asValue(CategoriesDataSource),

  getContactsUseCase: asFunction(getContactsUseCase),
  getContactUseCase: asFunction(getContactUseCase),
  createContactUseCase: asFunction(createContactUseCase),
  updateContactUseCase: asFunction(updateContactUseCase),
  getCategoriesUseCase: asFunction(getCategoriesUseCase)
});

export const DI = container;
