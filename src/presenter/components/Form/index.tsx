import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input, Select } from "@/presenter/components";

import * as S from "./styles";
import { DI } from "@/di/ioc";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve conter um mínimo de 3 letras." }),
  email: z.string().email("Este e-mail não é válido."),
  phone: z.string().min(12, { message: "Telefone inválido." }),
  category: z.string().min(1, { message: "Selecione uma categoria." })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const { categories } = DI.resolve("newCategoriesViewModel");

  const onSubmit = async (data: ContactFormData) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
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
          errorMessage={errors.category && errors.category.message}
          {...register("category")}
          name={register("category").name}
          onChange={register("category").onChange}
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
