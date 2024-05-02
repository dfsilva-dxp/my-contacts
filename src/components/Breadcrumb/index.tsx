import { Link } from "react-router-dom";
import { CaretLeft } from "phosphor-react";

import { Flex } from "@/components";

import * as S from "./styles";

import { BreadcrumbButtonProps, IBreadcrumbProps } from "./types";

const Breadcrumb = ({ title, url }: IBreadcrumbProps) => {
  return (
    <Flex justify="center" direction="column" gap="$1">
      <BreadcrumbButton url={url} />

      <S.BreadcrumbStrong>{title}</S.BreadcrumbStrong>
    </Flex>
  );
};

export default Breadcrumb;

const BreadcrumbButton = ({ url }: BreadcrumbButtonProps) => {
  return (
    <S.BreadcrumbButtonContent>
      <Link to={url}>
        <Flex align="center" justify="center" gap="$1">
          <CaretLeft size={16} weight="bold" />
          Voltar
        </Flex>
      </Link>
    </S.BreadcrumbButtonContent>
  );
};
