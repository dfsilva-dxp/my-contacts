import styled, { css } from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  ${({ theme }) => css`
    margin-top: -0.5rem;
    background-color: ${theme.colors.primary.lighter};
    min-width: 4rem;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    padding: 0.3125rem;
    box-shadow: 0 0.625rem 2.375rem -0.625rem rgba(22, 23, 24, 0.35),
      0 0.625 1.25rem -1rem rgba(22, 23, 24, 0.2);
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  `}
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  ${({ theme }) => css`
    width: 100%;
    height: 1.5625rem;
    border-radius: 3px;
    padding: 0 0.3125rem;
    position: relative;
    user-select: none;
    outline: none;
    color: ${theme.colors.gray[900]};
    font-weight: ${theme.font.weight.bold};

    &,
    a,
    button {
      background: none;
      border: none;
      outline: none;

      width: 100%;
      line-height: 1.5;
      color: inherit;
      font-weight: inherit;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .blue {
      color: ${theme.colors.primary.main};
    }
    .red {
      color: ${theme.colors.danger.main};
    }

    &[data-disabled] {
      color: ${theme.colors.gray[200]};
      pointer-events: none;
    }

    &[data-highlighted] {
      background-color: ${theme.colors.white};
    }
  `}
`;

export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  ${({ theme }) => css`
    height: 1px;
    background-color: ${theme.colors.gray[200]};
    margin: 0.3125rem;
  `}
`;

export const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  ${({ theme }) => css`
    fill: ${theme.colors.primary.lighter};
  `}
`;
