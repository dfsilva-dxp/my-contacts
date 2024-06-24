import { useCallback, useEffect, useMemo, useState } from "react";

import { Contact } from "@/domain/model/Contacts";
import { UseCase } from "@/domain/model/types";

import { handleError } from "@/utils/common/fn/handleErrors";

export type ContactsListViewModelResponse = {
  contacts: Contact[];
  order: "asc" | "desc";
  isLoading: boolean;
  hasError: boolean;
  getContacts: () => Promise<void>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  toggleSortByName: () => void;
};

type Dependencies = {
  readonly getContactsUseCase: UseCase<Contact[]>;
};

export const useContactsListViewModel = ({
  getContactsUseCase
}: Dependencies): ContactsListViewModelResponse => {
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
      setHasError(false);
    } catch (error) {
      handleError(error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [getContactsUseCase]);

  useEffect(() => {
    const controller = new AbortController();
    void getContacts();

    return () => {
      controller.abort();
    };
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
    getContacts,
    setSearchTerm,
    toggleSortByName
  };
};
