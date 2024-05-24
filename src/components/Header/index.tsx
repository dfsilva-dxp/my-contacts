import { ReactComponent as Logo } from "@assets/image/svg/logo.svg";

import Search from "@components/Search";
import Flex from "@components/Flex";

import * as S from "./styles";

interface IHeaderProps {
  hasSearchForm?: boolean;
}

const Header = ({ hasSearchForm = false }: IHeaderProps) => {
  return (
    <S.HeaderContent>
      <Flex direction="column" align="center" justify="center" gap="$4">
        <Logo />

        {hasSearchForm && <Search />}
      </Flex>
    </S.HeaderContent>
  );
};

export default Header;
