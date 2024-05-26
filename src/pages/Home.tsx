import { Box, ContactsList, Container, Header } from "@/components";

const HomePage = () => {
  return (
    <Container>
      <Box>
        <Header hasSearchForm />
        <ContactsList />
      </Box>
    </Container>
  );
};

export default HomePage;
