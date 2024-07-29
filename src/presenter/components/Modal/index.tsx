import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import { Button, Flex } from "@/presenter/components";

import * as S from "./styles";

import { IModalProps } from "./types";

const Modal = ({
  danger = false,
  contact_name,
  onDeleteContact
}: IModalProps) => {
  return (
    <Dialog.Portal>
      <S.DialogOverlay />

      <S.DialogContent>
        <Flex align="flex-start" justify="space-between">
          <S.DialogTitle className={danger ? "danger" : ""}>
            Tem certeza que deseja remover o <br />
            contato {`"${contact_name}"`}?
          </S.DialogTitle>

          <Dialog.Close asChild>
            <S.CloseButton aria-label="Close" type="button">
              <X />
            </S.CloseButton>
          </Dialog.Close>
        </Flex>

        <S.DialogDescription>
          Esta ação não poderá ser desfeita!
        </S.DialogDescription>

        <Flex align="center" justify="flex-end">
          <Flex gap="$4">
            <Dialog.Close asChild>
              <Button variant="neutral">Cancelar</Button>
            </Dialog.Close>

            <Button
              variant={danger ? "danger" : "primary"}
              onClick={onDeleteContact}
            >
              Deletar
            </Button>
          </Flex>
        </Flex>
      </S.DialogContent>
    </Dialog.Portal>
  );
};

export default Modal;
