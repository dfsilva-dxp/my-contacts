import { useEffect, useState } from "react";

import { Box, ContactTable, Container, Header } from "@/components";

import { IContact } from "@/components/ContactCard/types";

const HomePage = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  function getAllContacts() {
    fetch("http://localhost:3000/api/contacts")
      .then(async (response) => {
        const data: IContact[] = await response.json();
        setContacts(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getAllContacts();

    return () => setContacts([]);
  }, []);

  return (
    <Container>
      <Box>
        <Header hasSearchForm />
        <ContactTable contacts={contacts} />
      </Box>
    </Container>
  );
};

export default HomePage;
