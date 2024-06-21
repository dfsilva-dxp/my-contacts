import { Contact } from "@/domain/model/Contacts";

interface IContactTableProps {
  contacts: Contact[];
  onSortByName(): void;
  order: "asc" | "desc";
}

export { IContactTableProps };
