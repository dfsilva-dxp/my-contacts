import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input, Select } from "@/presenter/components";

import { formatPhoneNumberForDatabase } from "@/utils/common/fn/formatPhoneNumber";

import * as S from "./styles";

import { Category } from "@/domain/model/Categories";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve conter um mínimo de 3 letras." }),
  email: z.string().email("Este e-mail não é válido."),
  phone: z.string().min(12, { message: "Telefone inválido." }),
  category_id: z.string().min(1, { message: "Selecione uma categoria." })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

type Dependencies = {
  categories: Category[];
  whenSubmit: ({
    name,
    email,
    phone,
    category_id
  }: ContactFormData) => Promise<void>;
};

const Form = ({ whenSubmit, categories }: Dependencies) => {
  const [key, setKey] = useState(+new Date());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

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
