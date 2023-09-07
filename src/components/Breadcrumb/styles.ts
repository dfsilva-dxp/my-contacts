import styled, { css } from "styled-components";

export const BreadcrumbContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    & strong {
      font-size: 1.5rem;
      font-weight: ${theme.font.weight.bold};
      line-height: normal;
    }
  `}
`;

export const BreadcrumbButtonContent = styled.a`
  ${({ theme }) => css`
    padding: 0;
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.primary.main};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    &:hover {
      background-color: transparent;
      color: ${theme.colors.primary.dark};
    }
  `}
`;
