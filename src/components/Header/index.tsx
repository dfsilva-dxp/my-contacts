import Search from "@components/Search";

import { ReactComponent as Logo } from "@assets/image/svg/logo.svg";

import * as S from "./styles";

interface IHeaderProps {
  hasSearchForm?: boolean;
}

const Header = ({ hasSearchForm = false }: IHeaderProps) => {
  return (
    <S.HeaderContent>
      <S.LogoContent>
        <Logo />
      </S.LogoContent>

      {hasSearchForm && <Search />}
    </S.HeaderContent>
  );
};

export default Header;
