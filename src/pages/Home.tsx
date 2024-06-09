import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

import { IContact } from "@/components/ContactCard/types";

const HomePage = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [loading, setLoading] = useState(false);

  function getAllContacts() {
    fetch("http://localhost:3000/api/contacts")
      .then(async (response) => {
        setLoading(true);

        const data: IContact[] = await response.json();
        setContacts(data);
      })
      .then(() => setLoading(false))
      .catch(console.error);
  }

  useEffect(() => {
    getAllContacts();

    return () => setContacts([]);
  }, []);

  return (
    <Container>
      {loading && <Loader />}
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
        <ContactTable contacts={contacts} />
      </Box>
    </Container>
  );
};

export default HomePage;
