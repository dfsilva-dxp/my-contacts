import { InputHTMLAttributes } from "react";

import * as S from "./styles";

type InputType = InputHTMLAttributes<HTMLInputElement>;

interface IInputProps extends InputType {
  borderRadius?: "default" | "full";
  errorMessage?: string;
  hasBoxShadow?: boolean;
  label: string;
}

export type InputContentProps = Omit<IInputProps, "label">;

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
