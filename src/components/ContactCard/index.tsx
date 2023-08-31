import { PencilLine, Trash } from "phosphor-react";

import { Badge } from "@/components";

import * as S from "./styles";

const ContactCard = () => {
  return (
    <S.ContactCardContent>
      <S.ContactCardInfo>
        <strong>
          Daniel Silva
          <Badge>Instagram</Badge>
        </strong>

        <small>daniel.silva@email.com</small>

        <small>(11) 95199-1612</small>
      </S.ContactCardInfo>

      <S.ContactCardButtonsGroup>
        <S.ContactCardButton>
          <PencilLine size={20} weight="bold" />
        </S.ContactCardButton>

        <S.ContactCardButton color="red">
          <Trash size={20} weight="bold" />
        </S.ContactCardButton>
      </S.ContactCardButtonsGroup>
    </S.ContactCardContent>
  );
};

export default ContactCard;
