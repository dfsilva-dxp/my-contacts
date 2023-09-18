import { Button, Input, Select } from "@/components";

import * as S from "./styles";

const options = [
  { label: "Category I", value: "1" },
  { label: "Category II", value: "2" },
  { label: "Category III", value: "3" }
];

const Form = () => {
  return (
    <S.FormContent>
      <Input label="Nome" type="text" name="name" />
      <Input label="E-mail" type="email" name="email" />
      <Input label="Telefone" type="tel" name="phone" />
      <Select options={options} placeholder="Categoria" />
      <Button type="submit" size="full">
        Cadastrar
      </Button>
    </S.FormContent>
  );
};

export default Form;
