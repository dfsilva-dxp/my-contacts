import { Breadcrumb, Container, Form, Header } from "@/components";

import { PATHS } from "@/utils/common/constant/paths";

const NewContactPage = () => {
  return (
    <Container>
      <Header />
      <Breadcrumb title="Novo Contato" url={PATHS.HOME} />
      <Form />
    </Container>
  );
};

export default NewContactPage;
