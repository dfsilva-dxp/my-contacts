import { Button } from "@/components";

import * as S from "./styles";

const ContactsHeader = () => {
  return (
    <S.ContactHeaderContent>
      <strong>3 contatos</strong>

      <Button as="a" size="small" variant="ghost">
        Novo contato
      </Button>
    </S.ContactHeaderContent>
  );
};

export default ContactsHeader;
