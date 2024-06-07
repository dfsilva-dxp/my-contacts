import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode
} from "react";

export type ButtonType =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  variant?: "primary" | "neutral" | "ghost" | "danger";
  size?: "small" | "medium" | "full" | "icon";
  children: ReactNode;
  as?: ElementType;
} & ButtonType;

export type ButtonContentProps = Pick<ButtonProps, "size" | "variant">;
