import { IContact } from "@/components/ContactTable/types";

interface ISortContactsProps {
  contacts: IContact[];
  order: "asc" | "desc";
}

export function sortContactsByName({ contacts, order }: ISortContactsProps) {
  return contacts.sort((a, b) => {
    if (order === "asc") {
      return a.name.localeCompare(b.name);
    } else if (order === "desc") {
      return b.name.localeCompare(a.name);
    } else {
      throw new Error("Invalid order parameter. Use 'asc' or 'desc'.");
    }
  });
}
