import { Flex } from "@/presenter/components";

import { ReactComponent as EmptyBox } from "@/presenter/assets/image/svg/empty-box.svg";

import * as S from "./styles";

const ContactNotFoundComponent = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="$4"
      style={{
        padding: "1rem 0"
      }}
    >
      <EmptyBox />

      <S.NotFoundMessage>
        Você ainda não tem nenhum contato cadastrado! Clique no botão
        <strong> ”Novo contato” </strong>à cima para cadastrar o seu primeiro!
      </S.NotFoundMessage>
    </Flex>
  );
};

export default ContactNotFoundComponent;
