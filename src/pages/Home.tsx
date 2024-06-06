import { useEffect, useState } from "react";

import {
  Box,
  ContactCard,
  ContactsList,
  Container,
  Header
} from "@/components";

import { IContact } from "@/components/ContactCard/types";

const HomePage = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  function getAllContacts() {
    fetch("http://localhost:3000/api/contacts")
      .then((response) => response.json())
      .then((data: IContact[]) => setContacts(data))
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
        <ContactsList>
          {contacts.length &&
            contacts.map((contact) => (
              <ContactCard contact={contact} key={contact.id} />
            ))}
        </ContactsList>
      </Box>
    </Container>
  );
};

export default HomePage;
