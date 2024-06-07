import { ReactNode } from "react";

import { IContactsHeaderProps } from "../ContactsHeader/types";

interface IContactsListProps extends IContactsHeaderProps {
  children: ReactNode;
}

export { IContactsListProps };
