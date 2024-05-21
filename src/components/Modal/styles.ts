import styled, { css } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const DialogRoot = styled(Dialog.Root)``;

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  backdrop-filter: blur(0.2rem);
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DialogContent = styled(Dialog.Content)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 450px;
    max-height: 85vh;
    padding: 1.25rem;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

    &:focus {
      outline: none;
    }

    @keyframes contentShow {
      from {
        opacity: 0;
        transform: translate(-50%, -48%) scale(0.96);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  `}
`;

export const DialogTitle = styled(Dialog.Title)`
  ${({ theme }) => css`
    margin: 0;
    font-size: 1rem;

    &.danger {
      color: ${theme.colors.danger.main};
    }
  `}
`;

export const DialogDescription = styled(Dialog.Description)`
  padding: 0.625rem 0 1.25rem;
  line-height: 1.5;
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    height: 1.5rem;
    width: 1.5rem;
    background-color: ${theme.colors.white};
    border-color: transparent;
    border-radius: 100%;
    font-family: inherit;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${theme.colors.primary.lighter};
    }

    &:focus {
      outline: 0;
    }
  `}
`;
