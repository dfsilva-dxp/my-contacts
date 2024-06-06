import { PropsWithChildren } from "react";
import { CaretUp } from "phosphor-react";

import { ContactsHeader } from "@/components";

import * as S from "./styles";

const ContactsList = ({ children }: PropsWithChildren) => {
  return (
    <S.ContactsListContent>
      <ContactsHeader />

      <S.ContactsListBody>
        <S.ButtonWrapper>
          <S.OrderByButton size="small" variant="neutral" type="button">
            Nome <CaretUp size={18} weight="bold" />
          </S.OrderByButton>
        </S.ButtonWrapper>

        <S.ContactsListItems>{children}</S.ContactsListItems>
      </S.ContactsListBody>
    </S.ContactsListContent>
  );
};

export default ContactsList;
