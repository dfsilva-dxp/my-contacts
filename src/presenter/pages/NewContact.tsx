import { Box, Breadcrumb, Container, Form, Header } from "@/components";

import { ENDPOINTS } from "@/utils/common/constant/endpoints";

const NewContactPage = () => {
  return (
    <Container>
      <Box>
        <Header />
        <Breadcrumb title="Novo Contato" url={ENDPOINTS.HOME} />
        <Form />
      </Box>
    </Container>
  );
};

export default NewContactPage;
