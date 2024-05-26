import {
  FormEvent,
  forwardRef,
  ForwardRefRenderFunction,
  useCallback
} from "react";

import * as S from "./styles";

import { maskCep, maskCpf, maskCurrency, maskPhone } from "../Form/mask";

import { IInputProps } from "./types";

const Input: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  {
    borderRadius = "default",
    errorMessage,
    hasBoxShadow = true,
    label,
    mask,
    ...props
  },
  ref
) => {
  const handleKeyUp = useCallback(
    (evt: FormEvent<HTMLInputElement>) => {
      switch (mask) {
        case "cep":
          maskCep(evt);
          break;
        case "currency":
          maskCurrency(evt);
          break;
        case "cpf":
          maskCpf(evt);
          break;
        case "phone":
          maskPhone(evt);
          break;
        default:
          break;
      }
    },
    [mask]
  );

  return (
    <>
      <S.InputContent
        borderRadius={borderRadius}
        hasBoxShadow={hasBoxShadow}
        hasError={!!errorMessage}
      >
        <S.Input
          placeholder={label}
          {...props}
          ref={ref}
          onKeyUp={handleKeyUp}
        />
      </S.InputContent>
      <S.Error>{!!errorMessage && errorMessage}</S.Error>
    </>
  );
};

export default forwardRef(Input);
