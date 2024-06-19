import { Link } from "react-router-dom";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { DotsThreeVertical, PencilLine, Trash } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import { Button, Modal } from "@/presenter/components";

import { ENDPOINTS } from "@/utils/common/constant/endpoints";

import * as S from "./styles";

import { IDropdownMenuProps } from "./types";
import { useState } from "react";

const DropdownMenu = ({ contact_id, contact_name }: IDropdownMenuProps) => {
  const [openModal, setOpenModal] = useState(false);

  function toggleModal() {
    setOpenModal((prevState) => !prevState);
  }

  return (
    <>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button type="button" size="icon" variant="neutral">
            <DotsThreeVertical size={18} weight="bold" />
          </Button>
        </Dropdown.Trigger>

        <Dropdown.Portal>
          <S.DropdownMenuContent sideOffset={5} aria-label="profile menu">
            <S.DropdownMenuItem>
              <Link to={`${ENDPOINTS.EDIT}/${contact_id}`} className="blue">
                <PencilLine size={14} weight="bold" />
              </Link>
            </S.DropdownMenuItem>

            <S.DropdownMenuSeparator />

            <S.DropdownMenuItem>
              <button type="button" className="red" onClick={toggleModal}>
                <Trash size={14} weight="bold" />
              </button>
            </S.DropdownMenuItem>

            <S.DropdownMenuArrow />
          </S.DropdownMenuContent>
        </Dropdown.Portal>
      </Dropdown.Root>

      <Dialog.Root
        open={openModal}
        onOpenChange={() => setOpenModal((prevState) => !prevState)}
      >
        <Modal danger contact_name={contact_name} />
      </Dialog.Root>
    </>
  );
};

export default DropdownMenu;
