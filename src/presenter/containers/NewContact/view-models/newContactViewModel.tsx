import { useCallback, useEffect, useState } from "react";

import { Category } from "@/domain/model/Categories";
import { UseCase } from "@/domain/model/types";

import { handleError } from "@/utils/common/fn/handleErrors";

type Dependencies = {
  readonly getCategoriesUseCase: UseCase<Category[]>;
};

export const useNewContactViewModel = ({
  getCategoriesUseCase
}: Dependencies) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getCategories = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await getCategoriesUseCase.execute();

      setCategories(response);
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

  return { categories, isLoading, hasError };
};
