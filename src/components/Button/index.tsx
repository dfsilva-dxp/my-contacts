import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ForwardRefRenderFunction,
  ReactNode,
  forwardRef
} from "react";
import * as S from "./styles";

type ButtonType =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  variant?: "primary" | "neutral" | "ghost" | "danger";
  size?: "small" | "medium" | "full";
  children: ReactNode;
  as?: ElementType;
} & ButtonType;

export type ButtonContentProps = Pick<ButtonProps, "size" | "variant">;

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
