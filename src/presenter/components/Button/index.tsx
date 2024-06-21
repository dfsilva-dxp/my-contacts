import { ForwardRefRenderFunction, forwardRef } from "react";

import * as S from "./styles";

import { ButtonContentProps, ButtonProps } from "./types";

const Button: ForwardRefRenderFunction<ButtonContentProps, ButtonProps> = (
  { children, size = "medium", variant = "primary", ...props },
  ref
) => {
  return (
    <S.ButtonContent size={size} variant={variant} {...props} ref={ref}>
      {children}
    </S.ButtonContent>
  );
};

export default forwardRef(Button);
