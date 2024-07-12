import { useCallback } from "react";
import { toast } from "react-toastify";

import { handleError } from "@/utils/common/fn/handleErrors";

import { UseCaseWithParams } from "@/domain/model/types";

import { ContactResponse } from "@/domain/model/Contacts";

import { ContactFormData } from "../../EditContact/view-models/useFormViewModel";

export type NewContactViewModelResponse = {
  createContact: ({
    name,
    email,
    phone,
    category_id
  }: ContactFormData) => Promise<void>;
};

type Dependencies = {
  readonly createContactUseCase: UseCaseWithParams<
    ContactResponse,
    ContactFormData
  >;
};

export const useNewContactViewModel = ({
  createContactUseCase
}: Dependencies): NewContactViewModelResponse => {
  const createContact = useCallback(
    async ({ name, email, phone, category_id }: ContactFormData) => {
      try {
        const response = await createContactUseCase.execute({
          name,
          email,
          phone,
          category_id
        });

        if (response.id) {
          toast.success(
            `O contato ${response.name} foi adicionado à sua agenda.`
          );
        }
      } catch (error) {
        handleError(error);
      }
    },
    [createContactUseCase]
  );
  return { createContact };
};
