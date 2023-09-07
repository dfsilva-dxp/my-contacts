import {
  AnchorHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef
} from "react";
import { Link } from "react-router-dom";
import { CaretLeft } from "phosphor-react";

import * as S from "./styles";

interface IBreadcrumbProps {
  pathTo: string;
  title: string;
}

const Breadcrumb = ({ pathTo, title }: IBreadcrumbProps) => {
  return (
    <S.BreadcrumbContent>
      <Link to={pathTo} component={BreadcrumbButton} />
      <strong>{title}</strong>
    </S.BreadcrumbContent>
  );
};

export default Breadcrumb;

type AnchorButtonType = AnchorHTMLAttributes<HTMLAnchorElement>;

const AnchorButton: ForwardRefRenderFunction<
  HTMLAnchorElement,
  AnchorButtonType
> = ({ ...props }, ref) => {
  return (
    <S.BreadcrumbButtonContent ref={ref} {...props}>
      <CaretLeft size={18} weight="bold" />
      Voltar
    </S.BreadcrumbButtonContent>
  );
};

const BreadcrumbButton = forwardRef(AnchorButton);
