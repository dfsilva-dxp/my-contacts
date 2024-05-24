import { Box, Breadcrumb, Container, Form, Header } from "@/components";

import { PATHS } from "@/utils/common/constant/paths";

const NewContactPage = () => {
  return (
    <Container>
      <Box>
        <Header />
        <Breadcrumb title="Novo Contato" url={PATHS.HOME} />
        <Form />
      </Box>
    </Container>
  );
};

export default NewContactPage;
