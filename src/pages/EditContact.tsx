import { Box, Breadcrumb, Container, Form, Header } from "@/components";

import { PATHS } from "@/utils/common/constant/paths";

const EditContactPage = () => {
  console.log("Renderizando NewContactPage");
  return (
    <Container>
      <Box>
        <Header />
        <Breadcrumb title="Editar Daniel Silva" url={PATHS.HOME} />
        <Form />
      </Box>
    </Container>
  );
};

export default EditContactPage;
