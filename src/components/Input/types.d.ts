import { InputHTMLAttributes } from "react";

export type InputType = InputHTMLAttributes<HTMLInputElement>;

export interface IInputProps extends InputType {
  borderRadius?: "default" | "full";
  errorMessage?: string;
  hasBoxShadow?: boolean;
  label: string;
  mask?: "cep" | "currency" | "cpf" | "phone";
}

export type InputContentProps = Omit<IInputProps, "label">;
