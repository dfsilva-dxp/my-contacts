import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input, Select } from "@/components";

import * as S from "./styles";

const options = [
  { label: "Category I", value: "1" },
  { label: "Category II", value: "2" },
  { label: "Category III", value: "3" }
];

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve conter um mínimo de 3 letras." }),
  email: z.string().email("Este e-mail não é válido."),
  phone: z
    .string()
    .min(12, { message: "O nome deve conter um mínimo de 3 letras." })
});

export type contactFormData = z.infer<typeof contactFormSchema>;
const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: contactFormData) => {
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
        />
        <Input
          label="E-mail"
          type="email"
          {...register("email")}
          errorMessage={errors.email && errors.email.message}
        />
        <Input
          label="Telefone"
          mask="phone"
          {...register("phone")}
          errorMessage={errors.phone && errors.phone.message}
        />
        <Select options={options} selectLabel="Categorias" />
        <Button type="submit" size="full" disabled={isSubmitting}>
          Cadastrar
        </Button>
      </form>
    </S.FormContent>
  );
};

export default Form;
