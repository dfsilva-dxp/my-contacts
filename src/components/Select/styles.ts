import styled, { css } from "styled-components";

import { ISelectContentProps } from ".";

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

export const SelectContent = styled.div<ISelectContentProps>`
  ${({ theme, borderRadius, hasBoxShadow }) => css`
    width: 31.25rem;
    height: 3.125rem;
    padding: 0.5rem 1rem;
    background: ${theme.colors.white};
    border: 2px solid transparent;

    flex-shrink: 0;

    &:focus-within {
      border-color: ${theme.colors.primary.main};
    }

    ${!!borderRadius && variant[borderRadius]}
    ${!!hasBoxShadow && variant.withBoxShadow}
  `}
`;

export const SelectInput = styled.select`
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

export const SelectPlaceholder = styled.option`
  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
  `}
`;
