import { CaretUp } from "phosphor-react";

import { ContactsHeader } from "@/components";

import * as S from "./styles";

import { IContactsListProps } from "./types";

const ContactsList = ({ children, contact_count }: IContactsListProps) => {
  return (
    <S.ContactsListContent>
      <ContactsHeader contact_count={contact_count} />

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
