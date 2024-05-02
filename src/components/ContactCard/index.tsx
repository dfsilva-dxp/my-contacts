import { Link } from "react-router-dom";
import { PencilLine, Trash } from "phosphor-react";

import { Badge, Flex } from "@/components";

import { PATHS } from "@/utils/common/constant/paths";

import * as S from "./styles";

const ContactCard = () => {
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
              Daniel Silva
              <Badge>Instagram</Badge>
            </strong>

            <small>daniel.silva@email.com</small>

            <small>(11) 95199-1612</small>
          </Flex>
        </S.ContactCardInfo>

        <Flex display="inline-flex" justify="center" gap="$2">
          <S.ContactCardButton>
            <Flex align="center">
              <Link to={`${PATHS.EDIT}/123id`}>
                <PencilLine size={20} weight="bold" />
              </Link>
            </Flex>
          </S.ContactCardButton>

          <S.ContactCardButton color="red">
            <Flex align="center">
              <Trash size={20} weight="bold" />
            </Flex>
          </S.ContactCardButton>
        </Flex>
      </Flex>
    </S.ContactCardContent>
  );
};

export default ContactCard;
