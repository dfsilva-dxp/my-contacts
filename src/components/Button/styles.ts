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
    font-weight: ${theme.font.weight.bold};
    transition: all 0.15s ease-in-out;

    ${!!variant && buttonVariants[variant](theme)}
    ${!!size && buttonVariants[size]}
  `}
`;

const buttonVariants = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.white};

    &:hover,
    &:active {
      background-color: ${theme.colors.primary.dark};
    }
  `,
  neutral: (theme: DefaultTheme) => css`
    background-color: transparent;

    &:hover,
    &:active {
      background-color: ${theme.colors.white};
    }
  `,
  ghost: (theme: DefaultTheme) => css`
    background-color: transparent;
    border-color: ${theme.colors.primary.main};
    color: ${theme.colors.primary.main};

    &:hover,
    &:active {
      background-color: ${theme.colors.primary.main};
      color: ${theme.colors.white};
    }
  `,
  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.danger.main};
    color: ${theme.colors.white};

    &:hover,
    &:active {
      background-color: ${theme.colors.danger.dark};
    }
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
