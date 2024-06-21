import { useCallback, useEffect, useMemo, useState } from "react";

import { Contact } from "@/domain/model/Contacts";
import { UseCase } from "@/domain/model/types";

import { handleError } from "@/utils/common/fn/handleErrors";

type Dependencies = {
  readonly getContactsUseCase: UseCase<Contact[]>;
};

type Response = {
  contacts: Contact[];
  order: "asc" | "desc";
  isLoading: boolean;
  hasError: boolean;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  toggleSortByName: () => void;
};

export const useContactsListViewModel = ({
  getContactsUseCase
}: Dependencies): Response => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const toggleSortByName = useCallback(() => {
    setOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  }, [setOrder]);

  const getContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getContactsUseCase.execute();
      setContacts(response);
    } catch (error) {
      handleError(error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [getContactsUseCase]);

  useEffect(() => {
    void getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredContacts = useMemo(() => {
    if (searchTerm) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    }

    return contacts;
  }, [contacts, searchTerm]);

  return {
    contacts: filteredContacts,
    order,
    isLoading,
    hasError,
    setSearchTerm,
    toggleSortByName
  };
};
