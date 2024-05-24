import { Breadcrumb, Container, Form, Header } from "@/components";

import { PATHS } from "@/utils/common/constant/paths";

const EditContactPage = () => {
  console.log("Renderizando NewContactPage");
  return (
    <Container>
      <Header />
      <Breadcrumb title="Editar Daniel Silva" url={PATHS.HOME} />
      <Form />
    </Container>
  );
};

export default EditContactPage;
