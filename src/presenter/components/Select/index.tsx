import { forwardRef, ForwardRefRenderFunction } from "react";
import * as Select from "@radix-ui/react-select";
import { CaretDown, CaretUp, Check } from "phosphor-react";

import * as S from "./styles";

import { SelectElement, SelectProps } from "./types";

const SelectInput: ForwardRefRenderFunction<SelectElement, SelectProps> = (
  {
    placeholder = "Selecione uma categoria",
    errorMessage,
    selectLabel,
    options,
    name,
    onChange,
    ...props
  },
  ref
) => {
  return (
    <S.SelectWrapper>
      <Select.Root
        {...props}
        onValueChange={(value) =>
          onChange && onChange({ target: { name, value } })
        }
      >
        <S.SelectTriggerContent
          aria-label="Categories"
          ref={ref}
          tabIndex={4}
          $hasError={!!errorMessage}
        >
          <Select.Value placeholder={placeholder} />

          <S.SelectIcon>
            <CaretDown weight="bold" />
          </S.SelectIcon>
        </S.SelectTriggerContent>

        <Select.Portal>
          <S.SelectContent>
            <S.SelectScrollUpButton>
              <CaretUp weight="bold" />
            </S.SelectScrollUpButton>

            <S.SelectViewport>
              <S.SelectGroup>
                {!!selectLabel && <S.SelectLabel>Categorias</S.SelectLabel>}

                {options.map((item) => (
                  <S.SelectItem value={item.name} key={item.id}>
                    <Select.ItemText>{item.name}</Select.ItemText>

                    <Select.ItemIndicator>
                      <Check weight="bold" />
                    </Select.ItemIndicator>
                  </S.SelectItem>
                ))}
              </S.SelectGroup>
            </S.SelectViewport>

            <Select.ScrollDownButton>
              <CaretDown weight="bold" />
            </Select.ScrollDownButton>
          </S.SelectContent>
        </Select.Portal>
      </Select.Root>
      <S.Error>{!!errorMessage && errorMessage}</S.Error>
    </S.SelectWrapper>
  );
};

export default forwardRef(SelectInput);
