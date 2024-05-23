import { ChangeHandler } from "react-hook-form";

interface IOption {
  label: string;
  value: string;
}

export type SelectProps = {
  placeholder?: string;
  selectLabel?: string;
  name?: string;
  onChange?: ChangeHandler | undefined;
  options: IOption[];
};
