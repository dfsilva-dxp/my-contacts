import Input from "@components/Input";

import * as S from "./styles";

const Search = () => {
  return (
    <S.Wrapper>
      <Input
        type="search"
        label="Pesquisar contato"
        borderRadius="full"
        hasBoxShadow={false}
      />
    </S.Wrapper>
  );
};

export default Search;
