import { CaretLeft } from "phosphor-react";

import * as S from "./styles";

interface IBreadcrumbProps {
  title: string;
}

const Breadcrumb = ({ title }: IBreadcrumbProps) => {
  return (
    <S.BreadcrumbContent>
      <BreadcrumbButton />
      <strong>{title}</strong>
    </S.BreadcrumbContent>
  );
};

export default Breadcrumb;

const BreadcrumbButton = () => {
  return (
    <S.BreadcrumbButtonContent>
      <CaretLeft size={18} weight="bold" />
      Voltar
    </S.BreadcrumbButtonContent>
  );
};
