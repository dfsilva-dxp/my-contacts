import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { ReactComponent as Logo } from "@/presenter/assets/image/svg/logo.svg";

import { Input, Flex } from "@/presenter/components";

interface IHeaderProps {
  hasSearchForm?: boolean;
  onSetSearchTerm?: Dispatch<SetStateAction<string>>;
}

const Header = ({ hasSearchForm = false, onSetSearchTerm }: IHeaderProps) => {
  const [value, setValue] = useState("");

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target;
    setValue(value);
    !!onSetSearchTerm && onSetSearchTerm(value);
  }

  return (
    <Flex
      direction="column"
      align="stretch"
      justify="center"
      gap="$4"
      style={{
        paddingBottom: "1rem"
      }}
    >
      <Flex justify="center">
        <Logo />
      </Flex>

      {hasSearchForm && (
        <Input
          type="search"
          label="Pesquisar contato"
          borderRadius="full"
          hasBoxShadow={false}
          value={value}
          onChange={handleChange}
        />
      )}
    </Flex>
  );
};

export default Header;
