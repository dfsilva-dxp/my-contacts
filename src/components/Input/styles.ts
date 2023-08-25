import styled, { css } from "styled-components";

import { InputContentProps } from ".";

const variant = {
  default: () => css`
    border-radius: 0.25rem;
  `,
  full: () => css`
    border-radius: 1.5625rem;
  `,
  withBoxShadow: () => css`
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  `
};

export const InputContent = styled.div<InputContentProps>`
  ${({ theme, borderRadius, hasBoxShadow }) => css`
    width: 31.25rem;
    height: 3.125rem;
    padding: 0.5rem 1rem;
    background: ${theme.colors.whiteMain};
    border: 2px solid transparent;

    flex-shrink: 0;

    &:focus-within {
      border-color: ${theme.colors.primaryMain};
    }

    ${!!borderRadius && variant[borderRadius]}
    ${!!hasBoxShadow && variant.withBoxShadow}
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
      color: ${theme.colors.gray200};
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    padding: 0.5rem 1rem;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.dangerMain};
    font-weight: ${theme.font.weight.bold};
  `}
`;
