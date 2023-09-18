import * as S from "./styles";

export interface ISelectContentProps {
  borderRadius?: "default" | "full";
  hasBoxShadow?: boolean;
}

type SelectProps = {
  placeholder?: string;
  options: {
    label: string;
    value: string;
  }[];
} & ISelectContentProps;

const Select = ({
  placeholder = "Selecione uma categoria",
  options,
  borderRadius = "default",
  hasBoxShadow = true
}: SelectProps) => {
  return (
    <S.SelectContent borderRadius={borderRadius} hasBoxShadow={hasBoxShadow}>
      <S.SelectInput>
        <S.SelectPlaceholder>{placeholder}</S.SelectPlaceholder>
        {options.map((item) => (
          <option value={item.value} key={item.label}>
            {item.label}
          </option>
        ))}
      </S.SelectInput>
    </S.SelectContent>
  );
};

export default Select;
