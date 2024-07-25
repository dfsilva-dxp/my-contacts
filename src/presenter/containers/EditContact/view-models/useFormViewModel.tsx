import { ForwardedRef, useImperativeHandle, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { DI } from "@/di/ioc";

import { Contact } from "@/domain/model/Contacts";

import { formatPhoneNumber } from "@/utils/common/fn/formatPhoneNumber";

import { GetCategoriesViewModelResponse } from "../../NewContact/view-models/getCategoriesViewModel";
import { FormHandle } from "@/presenter/components/Form";

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
  ref: ForwardedRef<FormHandle>;
};

export const useFormViewModel = ({ ref }: Dependencies) => {
  const [categoryId, setCategoryId] = useState<string | null>("");

  const { categories } = DI.resolve<GetCategoriesViewModelResponse>(
    "getCategoriesViewModel"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  useImperativeHandle(
    ref,
    () => ({
      resetFormData: (contact: Contact | undefined) => {
        reset({
          name: contact?.name,
          email: contact?.email,
          phone: formatPhoneNumber(contact!.phone),
          category_id: contact!.category_id!
        });
        setCategoryId(contact!.category_id);
      }
    }),
    [reset]
  );

  return {
    categoryId,
    categories,
    register,
    handleSubmit,
    reset,
    errors,
    isSubmitting,
    isValid
  };
};
