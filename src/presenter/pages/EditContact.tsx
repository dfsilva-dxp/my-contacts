import {
  Box,
  Breadcrumb,
  Container,
  Form,
  Header
} from "@/presenter/components";

import { ENDPOINTS } from "@/utils/common/constant/endpoints";

const EditContactPage = () => {
  return (
    <Container>
      <Box>
        <Header />
        <Breadcrumb title="Editar Daniel Silva" url={ENDPOINTS.HOME} />
        <Form />
      </Box>
    </Container>
  );
};

export default EditContactPage;
