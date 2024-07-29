interface IDropdownMenuProps {
  contact_id: string;
  contact_name: string;
  onDeleteContact?: (contactId: Id) => Promise<void>;
}

export { IDropdownMenuProps };
