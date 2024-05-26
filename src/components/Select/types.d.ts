import { ElementRef } from "react";
import { ChangeHandler } from "react-hook-form";
import * as Select from "@radix-ui/react-select";

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
  errorMessage?: string;
};

export type SelectElement = ElementRef<typeof Select.Trigger>;

export type SelectTriggerContentProps = {
  $hasError: boolean;
};
