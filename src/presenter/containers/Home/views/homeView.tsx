import { Link } from "react-router-dom";
import { DI } from "@/di/ioc";

import {
  Box,
  Button,
  ContactNotFound,
  ContactTable,
  Container,
  EmptyContactList,
  Flex,
  HasErrorComponent,
  Header,
  Loader
} from "@/presenter/components";

import { ENDPOINTS } from "@/utils/common/constant/endpoints";
import { sortContactsByName } from "@/utils/common/fn/sortContactsByName";
import { ContactsListViewModelResponse } from "../view-models/homeViewModel";

const HomeView = () => {
  const {
    contacts,
    order,
    searchTerm,
    isLoading,
    hasError,
    getContacts,
    deleteContact,
    setSearchTerm,
    toggleSortByName
  } = DI.resolve<ContactsListViewModelResponse>("homeViewModel");

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Box>
        <Header
          hasSearchForm={!hasError || contacts.length > 0}
          onSetSearchTerm={setSearchTerm}
        />

        <Flex
          align="center"
          justify="center"
          style={{
            borderBottom: "1px solid #E6E6E6",
            paddingBottom: "1rem"
          }}
        >
          {!hasError && (
            <small
              style={{
                flex: 1
              }}
            >
              <strong>
                {String(contacts.length).padStart(2, "00")} contatos
              </strong>
            </small>
          )}
          <Link to={ENDPOINTS.NEW}>
            <Button size="small" variant="ghost" as="span">
              Novo contato
            </Button>
          </Link>
        </Flex>

        {!hasError ? (
          <>
            {contacts.length > 0 && (
              <ContactTable
                contacts={sortContactsByName({
                  contacts: [...contacts],
                  order
                })}
                order={order}
                onSortByName={toggleSortByName}
                onDeleteContact={deleteContact}
              />
            )}

            {contacts.length < 1 && !searchTerm && <EmptyContactList />}
            {contacts.length < 1 && !!searchTerm && (
              <ContactNotFound searchTerm={searchTerm} />
            )}
          </>
        ) : (
          <HasErrorComponent handleClick={getContacts} />
        )}
      </Box>
    </Container>
  );
};

export default HomeView;
