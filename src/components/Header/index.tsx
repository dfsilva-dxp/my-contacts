import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { ReactComponent as Logo } from "@assets/image/svg/logo.svg";

import { Input } from "@/components";
import Flex from "@components/Flex";

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
    <Flex direction="column" align="stretch" justify="center" gap="$4">
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
