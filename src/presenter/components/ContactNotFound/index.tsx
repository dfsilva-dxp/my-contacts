import { Flex } from "@/presenter/components";

import { ReactComponent as MagnifierQuestion } from "@/presenter/assets/image/svg/magnifier-question.svg";

import * as S from "./styles";

import { IContactNotFoundProps } from "./types";

const ContactNotFound = ({ searchTerm = "" }: IContactNotFoundProps) => {
  return (
    <Flex
      align="center"
      justify="center"
      gap="$4"
      style={{
        padding: "1rem 0"
      }}
    >
      <MagnifierQuestion />

      <S.EmptyMessage>
        Nenhum resultado foi encontrado para <strong>”{searchTerm}”</strong>.
      </S.EmptyMessage>
    </Flex>
  );
};

export default ContactNotFound;
