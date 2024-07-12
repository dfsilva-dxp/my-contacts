import { useCallback, useState } from "react";

import { handleError } from "@/utils/common/fn/handleErrors";

import { Id, UseCaseWithParams } from "@/domain/model/types";

import { Contact } from "@/domain/model/Contacts";

export type GetContactViewModelResponse = {
  isLoading: boolean;
  getContactById: (contactId: string) => Promise<Contact | undefined>;
};

type Dependencies = {
  readonly getContactUseCase: UseCaseWithParams<Contact, Id>;
};

export const useGetContactViewModel = ({
  getContactUseCase
}: Dependencies): GetContactViewModelResponse => {
  const [isLoading, setIsLoading] = useState(true);

  const getContactById = useCallback(
    async (contactId: string) => {
      try {
        setIsLoading(true);
        const response = await getContactUseCase.execute(contactId);

        return response;
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [getContactUseCase]
  );
  return { isLoading, getContactById };
};
