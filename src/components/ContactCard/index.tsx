import { Link } from "react-router-dom";
import { PencilLine, Trash } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import { Badge, Flex, Modal } from "@/components";

import { PATHS } from "@/utils/common/constant/paths";

import * as S from "./styles";

import { IContactCardProps } from "./types";

const ContactCard = ({ contact }: IContactCardProps) => {
  function formatPhoneNumber(phoneNumber: string) {
    if (phoneNumber.length < 10 && phoneNumber.length > 11) {
      throw new Error(
        "O número de telefone deve conter exatamente 11 dígitos."
      );
    }

    const ddd = phoneNumber.slice(0, 2);
    const prefix = phoneNumber.slice(2, 7);
    const suffix = phoneNumber.slice(7);

    const formattedPhoneNumber = `(${ddd}) ${prefix}-${suffix}`;

    return formattedPhoneNumber;
  }

  return (
    <S.ContactCardContent>
      <Flex align="center" justify="space-between">
        <S.ContactCardInfo>
          <Flex
            display="inline-flex"
            justify="center"
            direction="column"
            gap="$1"
          >
            <strong>
              {contact.name}
              <Badge>{contact.category_name || "Pessoal"}</Badge>
            </strong>

            <small>{contact.email}</small>

            <small>{formatPhoneNumber(contact.phone)}</small>
          </Flex>
        </S.ContactCardInfo>

        <Flex display="inline-flex" justify="center" gap="$2">
          <S.ContactCardButton>
            <Flex align="center">
              <Link to={`${PATHS.EDIT}/${contact.id}`}>
                <PencilLine size={20} weight="bold" />
              </Link>
            </Flex>
          </S.ContactCardButton>

          <S.ContactCardButton color="red">
            <Flex align="center">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Trash size={20} weight="bold" />
                </Dialog.Trigger>

                <Modal danger />
              </Dialog.Root>
            </Flex>
          </S.ContactCardButton>
        </Flex>
      </Flex>
    </S.ContactCardContent>
  );
};

export default ContactCard;
