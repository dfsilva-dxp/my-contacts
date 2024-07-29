export interface IModalProps {
  danger?: boolean;
  contact_name: string;
  onDeleteContact?: () => Promise<void> | undefined;
}
