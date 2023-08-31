import { CaretUp } from "phosphor-react";

import { ContactCard, ContactsHeader } from "@/components";

import * as S from "./styles";

const ContactsList = () => {
  return (
    <S.ContactsListContent>
      <ContactsHeader />

      <S.ContactsListBody>
        <S.ButtonWrapper>
          <S.OrderByButton size="small" variant="neutral" type="button">
            Nome <CaretUp size={18} weight="bold" />
          </S.OrderByButton>
        </S.ButtonWrapper>

        <S.ContactsListItems>
          <ContactCard />
          <ContactCard />
        </S.ContactsListItems>
      </S.ContactsListBody>
    </S.ContactsListContent>
  );
};

export default ContactsList;
