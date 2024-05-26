import styled, { css, DefaultTheme } from "styled-components";

import { InputContentProps } from "./types";

const variant = {
  default: () => css`
    border-radius: 0.25rem;
  `,
  full: () => css`
    border-radius: 1.5625rem;
  `,
  withBoxShadow: () => css`
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  `,
  withError: (theme: DefaultTheme) => css`
    &,
    &:focus-within {
      border-color: ${theme.colors.danger.main};
    }
  `
};

export const InputContent = styled.div<InputContentProps>`
  ${({ theme, borderRadius, hasBoxShadow, hasError }) => css`
    width: 100%;
    height: 3.125rem;
    padding: 0.5rem 1rem;
    background: ${theme.colors.white};
    border: 2px solid transparent;

    flex-shrink: 0;

    &:focus-within {
      border-color: ${theme.colors.primary.main};
    }

    ${!!borderRadius && variant[borderRadius]}
    ${hasBoxShadow && variant.withBoxShadow}
    ${hasError && variant.withError(theme)}
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    height: 100%;

    &::placeholder {
      color: ${theme.colors.gray[200]};
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    padding: 0.5rem 0 1rem;
    font-size: 0.75rem;
    color: ${theme.colors.danger.main};
  `}
`;
