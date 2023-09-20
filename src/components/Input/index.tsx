import * as S from "./styles";

import { IInputProps } from "./types";

const Input = ({
  borderRadius = "default",
  errorMessage,
  hasBoxShadow = true,
  label,
  ...props
}: IInputProps) => {
  return (
    <>
      <S.InputContent borderRadius={borderRadius} hasBoxShadow={hasBoxShadow}>
        <S.Input placeholder={label} {...props} />
      </S.InputContent>
      <S.Error>{!!errorMessage && errorMessage}</S.Error>
    </>
  );
};

export default Input;
