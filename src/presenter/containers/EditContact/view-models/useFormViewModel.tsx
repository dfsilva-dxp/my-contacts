import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve conter um mínimo de 3 letras." }),
  email: z.string().email("Este e-mail não é válido."),
  phone: z.string().min(12, { message: "Telefone inválido." }),
  category_id: z.string().min(1, { message: "Selecione uma categoria." })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const useFormViewModel = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  return { register, handleSubmit, reset, errors, isSubmitting, isValid };
};
