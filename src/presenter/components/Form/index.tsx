import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import { Button, Input, Loader, Select } from "@/presenter/components";

import { formatPhoneNumberForDatabase } from "@/utils/common/fn/formatPhoneNumber";

import * as S from "./styles";

import {
  ContactFormData,
  useFormViewModel
} from "@/presenter/containers/EditContact/view-models/useFormViewModel";

import { Contact } from "@/domain/model/Contacts";

type Dependencies = {
  isLoading?: boolean;
  whenSubmit: ({
    name,
    email,
    phone,
    category_id
  }: ContactFormData) => Promise<void>;
};

export type FormHandle = {
  resetFormData: (contact: Contact | undefined) => void;
};

const Form: ForwardRefRenderFunction<FormHandle, Dependencies> = (
  { isLoading = false, whenSubmit },
  ref
) => {
  const [key, setKey] = useState(+new Date());

  const {
    categoryId,
    categories,
    register,
    handleSubmit,
    reset,
    errors,
    isSubmitting,
    isValid
  } = useFormViewModel({ ref });

  const onSubmit = async (data: ContactFormData) => {
    const formatedData = {
      ...data,
      phone: formatPhoneNumberForDatabase(data.phone)
    };
    whenSubmit(formatedData);
    reset();
    setKey(+new Date());
  };

  return (
    <S.FormContent>
      <Loader isLoading={isLoading} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nome"
          type="text"
          {...register("name")}
          errorMessage={errors.name && errors.name.message}
          autoFocus
          tabIndex={1}
        />
        <Input
          label="E-mail"
          type="email"
          {...register("email")}
          errorMessage={errors.email && errors.email.message}
          tabIndex={2}
        />
        <Input
          label="Telefone"
          mask="phone"
          {...register("phone")}
          errorMessage={errors.phone && errors.phone.message}
          tabIndex={3}
        />
        <Select
          options={categories}
          selectLabel="Categorias"
          errorMessage={errors.category_id && errors.category_id.message}
          {...register("category_id")}
          name={register("category_id").name}
          onChange={register("category_id").onChange}
          value={categoryId || undefined}
          key={key}
        />
        <Button
          type="submit"
          size="full"
          disabled={!isValid || isSubmitting}
          tabIndex={5}
        >
          Cadastrar
        </Button>
      </form>
    </S.FormContent>
  );
};

export default forwardRef(Form);
