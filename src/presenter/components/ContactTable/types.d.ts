import { Contact } from "@/domain/model/Contacts";

interface IContactTableProps {
  contacts: Contact[];
  order: "asc" | "desc";
  onSortByName: () => void;
  onDeleteContact?: (contactId: Id) => Promise<void>;
}

export { IContactTableProps };
