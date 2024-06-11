import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  ContactTable,
  Container,
  Flex,
  Header,
  Loader
} from "@/components";

import { PATHS } from "@/utils/common/constant/paths";

import { IContact } from "@/components/ContactTable/types";
import { sortContactsByName } from "@/utils/common/functions/sortContactsByName";
import axiosService from "@/utils/common/services/axiosService";

const HomePage = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const toggleSortByName = useCallback(() => {
    setOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  }, [setOrder]);

  const fetchContacts = useCallback(async () => {
    try {
      const { data } = await axiosService.get<IContact[]>("contacts");

      setContacts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
      <Loader isLoading={isLoading} />

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
