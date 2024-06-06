import { Link } from "react-router-dom";

import { Button } from "@/components";

import { PATHS } from "@/utils/common/constant/paths";

import * as S from "./styles";

import { IContactsHeaderProps } from "./types";

const ContactsHeader = ({ contact_count }: IContactsHeaderProps) => {
  return (
    <S.ContactHeaderContent>
      <strong>{`${contact_count} contatos`}</strong>

      <Link to={PATHS.NEW}>
        <Button size="small" variant="ghost" as="span">
          Novo contato
        </Button>
      </Link>
    </S.ContactHeaderContent>
  );
};

export default ContactsHeader;
