import { Button } from "@/components";

import * as S from "./styles";

const ContactsHeader = () => {
  return (
    <S.ContactHeaderContent>
      <span>3 contatos</span>

      <Button as="a" size="small">
        Novo contato
      </Button>
    </S.ContactHeaderContent>
  );
};

export default ContactsHeader;
