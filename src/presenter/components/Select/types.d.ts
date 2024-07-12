import { ElementRef } from "react";
import { ChangeHandler } from "react-hook-form";
import * as Select from "@radix-ui/react-select";

import { Category } from "@/domain/model/Categories";

export type SelectComponentProps = {
  placeholder?: string;
  selectLabel?: string;
  name?: string;
  onChange?: ChangeHandler | undefined;
  options: Category[];
  errorMessage?: string;
} & Select.SelectProps;

export type SelectElement = ElementRef<typeof Select.Trigger>;

export type SelectTriggerContentProps = {
  $hasError: boolean;
};
