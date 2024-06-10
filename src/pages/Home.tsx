import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

  function toggleSortByName() {
    setOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  }

  useEffect(() => {
    fetch("http://localhost:3000/api/contacts")
      .then(async (response) => {
        const data: IContact[] = await response.json();
        setContacts(data);
      })
      .catch(console.error);

    return () => setContacts([]);
  }, []);

  return (
    <Container>
      <Box>
        <Header hasSearchForm />
        <Flex align="center" justify="space-between">
          <small>
            <strong>
              {`${
                contacts.length > 0
                  ? String(contacts.length).padStart(2, "00")
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
            contacts: [...contacts],
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
