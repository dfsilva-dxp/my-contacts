import { CaretLeft } from "phosphor-react";

import { Flex } from "@/components";

import * as S from "./styles";

import { IBreadcrumbProps } from "./types";

const Breadcrumb = ({ title }: IBreadcrumbProps) => {
  return (
    <Flex justify="center" direction="column" gap="$1">
      <BreadcrumbButton />

      <S.BreadcrumbStrong>{title}</S.BreadcrumbStrong>
    </Flex>
  );
};

export default Breadcrumb;

const BreadcrumbButton = () => {
  return (
    <S.BreadcrumbButtonContent>
      <Flex align="center" justify="center" gap="$1">
        <CaretLeft size={18} weight="bold" />
        Voltar
      </Flex>
    </S.BreadcrumbButtonContent>
  );
};
