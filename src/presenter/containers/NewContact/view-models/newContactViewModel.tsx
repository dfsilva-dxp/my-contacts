import { useCallback, useEffect, useState } from "react";

import { handleError } from "@/utils/common/fn/handleErrors";

import { Category } from "@/domain/model/Categories";
import { UseCase, UseCaseWithParams } from "@/domain/model/types";

import { ContactResponse } from "@/domain/model/Contacts";
import { ContactFormData } from "@/presenter/components/Form";
import { toast } from "react-toastify";

export type NewContactViewModelResponse = {
  categories: Category[];
  isLoading: boolean;
  hasError: boolean;
  createContact: ({
    name,
    email,
    phone,
    category_id
  }: ContactFormData) => Promise<void>;
};

type Dependencies = {
  readonly getCategoriesUseCase: UseCase<Category[]>;
  readonly createContactUseCase: UseCaseWithParams<
    ContactResponse,
    ContactFormData
  >;
};

export const useNewContactViewModel = ({
  getCategoriesUseCase,
  createContactUseCase
}: Dependencies): NewContactViewModelResponse => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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

  const getCategories = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await getCategoriesUseCase.execute();

      if (response.length > 0) {
        setCategories(response);
      }

      setHasError(false);
    } catch (error) {
      setHasError(true);
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  }, [getCategoriesUseCase]);

  useEffect(() => {
    const controller = new AbortController();
    void getCategories();

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { categories, isLoading, hasError, createContact };
};
