import styled, { DefaultTheme, css } from "styled-components";

import { ButtonContentProps } from ".";

export const ButtonContent = styled.button<ButtonContentProps>`
  ${({ theme, variant, size }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    border-radius: 0.25rem;
    flex-shrink: 0;

    &:hover,
    &:active {
      filter: brightness(0.9);
    }

    ${!!variant && buttonVariants[variant](theme)}
    ${!!size && buttonVariants[size]}
  `}
`;

const buttonVariants = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primaryMain};
    color: ${theme.colors.whiteMain};
  `,
  neutral: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.whiteMain};
  `,
  ghost: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.whiteMain};
  `,
  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.dangerMain};
    color: ${theme.colors.whiteMain};
  `,
  small: () => css`
    font-size: 0.875rem;
    height: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  `,
  medium: () => css`
    height: 3.25rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  `,
  full: () => css`
    width: 100%;
    height: 3.25rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  `
};
