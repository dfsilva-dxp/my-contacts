interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  category_id: string | null;
  category_name: string | null;
}

interface IContactCardProps {
  contact: IContact;
}

export { IContactCardProps, IContact };
