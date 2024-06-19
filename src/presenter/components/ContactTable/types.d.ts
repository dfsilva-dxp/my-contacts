interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  category_id: string | null;
  category_name: string | null;
}

interface IContactTableProps {
  contacts: IContact[];
  onSortByName(): void;
  order: "asc" | "desc";
}

export { IContactTableProps, IContact };
