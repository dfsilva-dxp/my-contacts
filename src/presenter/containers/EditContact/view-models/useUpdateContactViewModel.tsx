import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { handleError } from "@/utils/common/fn/handleErrors";

import { UseCaseWithParams } from "@/domain/model/types";

import {
  ContactResponse,
  UpdateContactFormData
} from "@/domain/model/Contacts";

import { ROUTES } from "@/utils/common/constant/routes";

export type UpdateContactViewModelResponse = {
  updateContact: ({ id, formData }: UpdateContactFormData) => Promise<void>;
};

type Dependencies = {
  readonly updateContactUseCase: UseCaseWithParams<
    ContactResponse,
    UpdateContactFormData
  >;
};

export const useUpdateContactViewModel = ({
  updateContactUseCase
}: Dependencies): UpdateContactViewModelResponse => {
  const navigate = useNavigate();

  const updateContact = useCallback(
    async ({ id, formData }: UpdateContactFormData) => {
      try {
        const response = await updateContactUseCase.execute({ id, formData });

        if (response.id) {
          toast.success(
            `O contato ${response.name} foi atualizado com sucesso.`
          );

          navigate(ROUTES.HOME);
        }
      } catch (error) {
        handleError(error);
      }
    },
    [updateContactUseCase, navigate]
  );
  return { updateContact };
};
