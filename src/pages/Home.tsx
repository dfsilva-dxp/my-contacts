import { ContactsList, Container, Header } from "@/components";

const HomePage = () => {
  return (
    <Container>
      <Header hasSearchForm />
      <ContactsList />
    </Container>
  );
};

export default HomePage;
