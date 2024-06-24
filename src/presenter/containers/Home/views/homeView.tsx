import { Link } from "react-router-dom";
import { DI } from "@/di/ioc";

import {
  Box,
  Button,
  ContactNotFoundComponent,
  ContactTable,
  Container,
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
    isLoading,
    hasError,
    getContacts,
    setSearchTerm,
    toggleSortByName
  } = DI.resolve<ContactsListViewModelResponse>("homeViewModel");

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Box>
        <Header hasSearchForm onSetSearchTerm={setSearchTerm} />

        <Flex
          align="center"
          justify="space-between"
          style={{
            borderBottom: "1px solid #E6E6E6",
            paddingBottom: "1rem"
          }}
        >
          <small>
            <strong>
              {contacts.length > 0 &&
                `${String(contacts.length).padStart(2, "00")} contatos`}
            </strong>
          </small>

          <Link to={ENDPOINTS.NEW}>
            <Button size="small" variant="ghost" as="span">
              Novo contato
            </Button>
          </Link>
        </Flex>

        {contacts.length > 0 ? (
          <ContactTable
            contacts={sortContactsByName({
              contacts: [...contacts],
              order
            })}
            order={order}
            onSortByName={toggleSortByName}
          />
        ) : !hasError ? (
          <ContactNotFoundComponent />
        ) : (
          <HasErrorComponent handleClick={getContacts} />
        )}
      </Box>
    </Container>
  );
};

export default HomeView;
