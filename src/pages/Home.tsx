import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  ContactTable,
  Container,
  Flex,
  Header
} from "@/components";

import { PATHS } from "@/utils/common/constant/paths";

import { IContact } from "@/components/ContactTable/types";
import { sortContactsByName } from "@/utils/common/functions/sortContactsByName";

const HomePage = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState("");

  function toggleSortByName() {
    setOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  }

  const fetchContacts = useCallback(async () => {
    fetch("http://localhost:3000/api/contacts")
      .then(async (response) => {
        const data: IContact[] = await response.json();
        setContacts(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchContacts();

    return () => {
      controller.abort();
    };
  }, [fetchContacts]);

  const filteredContacts = useMemo(() => {
    if (searchTerm) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    }

    return contacts;
  }, [contacts, searchTerm]);

  return (
    <Container>
      <Box>
        <Header hasSearchForm onSetSearchTerm={setSearchTerm} />

        <Flex align="center" justify="space-between">
          <small>
            <strong>
              {`${
                filteredContacts.length > 0
                  ? String(filteredContacts.length).padStart(2, "00")
                  : "0"
              } contatos`}
            </strong>
          </small>

          <Link to={PATHS.NEW}>
            <Button size="small" variant="ghost" as="span">
              Novo contato
            </Button>
          </Link>
        </Flex>

        <ContactTable
          contacts={sortContactsByName({
            contacts: [...filteredContacts],
            order
          })}
          order={order}
          onSortByName={toggleSortByName}
        />
      </Box>
    </Container>
  );
};

export default HomePage;
