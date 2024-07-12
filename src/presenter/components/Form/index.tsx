import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, Input, Loader, Select } from "@/presenter/components";

import { DI } from "@/di/ioc";

import {
  formatPhoneNumber,
  formatPhoneNumberForDatabase
} from "@/utils/common/fn/formatPhoneNumber";

import * as S from "./styles";

import { GetCategoriesViewModelResponse } from "@/presenter/containers/NewContact/view-models/getCategoriesViewModel";

import {
  ContactFormData,
  useFormViewModel
} from "@/presenter/containers/EditContact/view-models/useFormViewModel";

import { Contact } from "@/domain/model/Contacts";

type Dependencies = {
  isLoading?: boolean;
  onGetContactById?: (contactId: string) => Promise<Contact | undefined>;
  whenSubmit: ({
    name,
    email,
    phone,
    category_id
  }: ContactFormData) => Promise<void>;
};

const Form = ({
  isLoading = false,
  onGetContactById,
  whenSubmit
}: Dependencies) => {
  const [key, setKey] = useState(+new Date());
  const [contactId, setContactId] = useState<string | undefined>(undefined);

  const { id } = useParams();
  const { register, handleSubmit, reset, errors, isSubmitting, isValid } =
    useFormViewModel();

  const { categories } = DI.resolve<GetCategoriesViewModelResponse>(
    "getCategoriesViewModel"
  );

  const onSubmit = async (data: ContactFormData) => {
    const formatedData = {
      ...data,
      phone: formatPhoneNumberForDatabase(data.phone)
    };
    whenSubmit(formatedData);
    reset();
    setKey(+new Date());
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const response = onGetContactById && (await onGetContactById(id));

        if (response) {
          setContactId(() => response.category_id || undefined);
          reset({
            name: response.name,
            email: response.email,
            phone: formatPhoneNumber(response.phone),
            category_id: response.category_id!
          });
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
          value={contactId}
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

export default Form;
