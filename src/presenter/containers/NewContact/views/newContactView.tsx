import { DI } from "@/di/ioc";

import {
  Box,
  Breadcrumb,
  Container,
  Form,
  Header
} from "@/presenter/components";

import { ENDPOINTS } from "@/utils/common/constant/endpoints";

import { NewContactViewModelResponse } from "../view-models/newContactViewModel";

const NewContactView = () => {
  const { createContact } = DI.resolve<NewContactViewModelResponse>(
    "newContactViewModel"
  );

  return (
    <Container>
      <Box>
        <Header />
        <Breadcrumb title="Novo Contato" url={ENDPOINTS.HOME} />
        <Form whenSubmit={createContact} />
      </Box>
    </Container>
  );
};

export default NewContactView;
