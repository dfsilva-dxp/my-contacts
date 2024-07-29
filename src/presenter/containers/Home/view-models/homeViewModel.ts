import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import { Contact } from "@/domain/model/Contacts";
import { Id, UseCase, UseCaseWithParams } from "@/domain/model/types";

import { handleError } from "@/utils/common/fn/handleErrors";

export type ContactsListViewModelResponse = {
  contacts: Contact[];
  order: "asc" | "desc";
  searchTerm: string;
  isLoading: boolean;
  hasError: boolean;
  getContacts: () => Promise<void>;
  deleteContact: (contactId: Id) => Promise<void>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  toggleSortByName: () => void;
};

type Dependencies = {
  readonly getContactsUseCase: UseCase<Contact[]>;
  readonly deleteContactUseCase: UseCaseWithParams<Contact[], Id>;
};

export const useContactsListViewModel = ({
  getContactsUseCase,
  deleteContactUseCase
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
      setHasError(true);
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  }, [getContactsUseCase]);

  const deleteContact = useCallback(
    async (contactId: Id) => {
      try {
        const response = await deleteContactUseCase.execute(contactId);
        setContacts(() => response);
        toast.success("Contato deletado com sucesso.");
      } catch (error) {
        setHasError(true);
        handleError(error);
      }
    },
    [deleteContactUseCase]
  );

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
    searchTerm,
    isLoading,
    hasError,
    getContacts,
    deleteContact,
    setSearchTerm,
    toggleSortByName
  };
};
