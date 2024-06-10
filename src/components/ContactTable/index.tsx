import { CaretDown, CaretUp } from "phosphor-react";

import { Badge, DropdownMenu, Flex } from "@/components";

import { formatPhoneNumber } from "@/utils/common/functions/formatPhoneNumber";

import * as S from "./styles";

import { IContactTableProps } from "./types";

const ContactTable = ({
  contacts,
  order,
  onSortByName
}: IContactTableProps) => {
  return (
    <S.TableContainer>
      <Flex direction="column" align="stretch" gap="$4">
        <S.TableWrapper>
          <S.Table>
            <thead>
              <tr>
                <th onClick={onSortByName} style={{ cursor: "pointer" }}>
                  <Flex align="center" gap="$1">
                    Nome
                    <Flex direction="column">
                      {order === "asc" ? (
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
              {contacts.length > 0 &&
                contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{formatPhoneNumber(contact.phone)}</td>
                    <td>{contact.email}</td>
                    <td>
                      <Badge>{contact.category_name || "Pessoal"}</Badge>
                    </td>
                    <td>
                      <DropdownMenu
                        contact_id={contact.id}
                        contact_name={contact.name}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </S.Table>
        </S.TableWrapper>
      </Flex>
    </S.TableContainer>
  );
};

export default ContactTable;
