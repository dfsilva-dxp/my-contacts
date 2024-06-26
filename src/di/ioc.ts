import { asFunction, asValue, createContainer } from "awilix";

import { contactsRepository } from "@/adapter/repository/contactsRepository";
import * as ContactsDataSource from "@/data/data-source/contactsDataSource";
import { getContactsUseCase } from "@/domain/useCases/contacts/getContacts";
import { useContactsListViewModel } from "@/presenter/containers/Home/view-models/homeViewModel";

import * as CategoriesDataSource from "@/data/data-source/categoriesDataSource";
import { categoriesRepository } from "@/adapter/repository/categoriesRepository";
import { getCategoriesUseCase } from "@/domain/useCases/categories/getCategories";
import { useNewContactViewModel } from "@/presenter/containers/NewContact/view-models/newContactViewModel";

const container = createContainer();

container.register({
  contactsRepository: asFunction(contactsRepository),
  homeViewModel: asFunction(useContactsListViewModel),
  contactsDataSource: asValue(ContactsDataSource),
  getContactsUseCase: asFunction(getContactsUseCase),

  categoriesRepository: asFunction(categoriesRepository),
  newCategoriesViewModel: asFunction(useNewContactViewModel),
  categoriesDataSource: asValue(CategoriesDataSource),
  getCategoriesUseCase: asFunction(getCategoriesUseCase)
});

export const DI = container;
