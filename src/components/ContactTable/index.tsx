import { useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";

import { Badge, DropdownMenu, Flex } from "@/components";

import { formatPhoneNumber } from "@/utils/common/functions/formatPhoneNumber";
import { sortContacts } from "@/utils/common/functions/sortContacts";

import * as S from "./styles";

import { IContactTableProps } from "./types";

const ContactTable = ({ contacts }: IContactTableProps) => {
  const [sortOrder, setSortOrder] = useState("asc");

  function handleSortClick() {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  }

  const sortedContacts = sortContacts({
    contacts: [...contacts],
    order: sortOrder
  });

  return (
    <S.TableContainer>
      <S.TableWrapper>
        <Flex direction="column" align="stretch">
          <Flex justify="flex-end">
            {contacts.length > 0 && (
              <small>
                <strong>
                  {`${String(contacts.length).padStart(2, "0")} contatos`}
                </strong>
              </small>
            )}
          </Flex>

          <S.Table>
            <thead>
              <tr>
                <th onClick={handleSortClick} style={{ cursor: "pointer" }}>
                  <Flex align="center" gap="$1">
                    Nome
                    <Flex direction="column">
                      {sortOrder === "asc" ? (
                        <CaretUp size={14} weight="bold" />
                      ) : (
                        <CaretDown size={14} weight="bold" />
                      )}
                    </Flex>
                  </Flex>
                </th>
                <th>Telefone</th>
                <th>E-mail</th>
                <th>Categoria</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {sortedContacts.length > 0 &&
                sortedContacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{formatPhoneNumber(contact.phone)}</td>
                    <td>{contact.email}</td>
                    <td>
                      <Badge>{contact.category_name || "Pessoal"}</Badge>
                    </td>
                    <td>
                      <DropdownMenu contact_id={contact.id} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </S.Table>
        </Flex>
      </S.TableWrapper>
    </S.TableContainer>
  );
};

export default ContactTable;
