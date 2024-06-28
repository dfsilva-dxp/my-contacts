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
  const { categories, createContact } = DI.resolve<NewContactViewModelResponse>(
    "newCategoriesViewModel"
  );

  return (
    <Container>
      <Box>
        <Header />
        <Breadcrumb title="Novo Contato" url={ENDPOINTS.HOME} />
        <Form whenSubmit={createContact} categories={categories} />
      </Box>
    </Container>
  );
};

export default NewContactView;
