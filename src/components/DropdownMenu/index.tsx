import { Link } from "react-router-dom";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { DotsThreeVertical, PencilLine, Trash } from "phosphor-react";

import { Button } from "@/components";

import { PATHS } from "@/utils/common/constant/paths";

import * as S from "./styles";

import { IDropdownMenuProps } from "./types";

const DropdownMenu = ({ contact_id }: IDropdownMenuProps) => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <Button type="button" size="icon" variant="neutral">
          <DotsThreeVertical size={18} weight="bold" />
        </Button>
      </Dropdown.Trigger>

      <Dropdown.Portal>
        <S.DropdownMenuContent sideOffset={5} aria-label="profile menu">
          <S.DropdownMenuItem>
            <Link to={`${PATHS.EDIT}/${contact_id}`} className="blue">
              <PencilLine size={16} weight="bold" />
            </Link>
          </S.DropdownMenuItem>

          <S.DropdownMenuSeparator />

          <S.DropdownMenuItem>
            <button type="button" className="red">
              <Trash size={16} weight="bold" />
            </button>
          </S.DropdownMenuItem>

          <S.DropdownMenuArrow />
        </S.DropdownMenuContent>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};

export default DropdownMenu;
