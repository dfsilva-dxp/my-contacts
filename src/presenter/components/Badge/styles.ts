import styled, { css } from "styled-components";

export const BadgeContent = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary.lighter};
    border-radius: 0.25rem;
    padding: 0.25rem;
    font-size: 0.75rem;
    color: ${theme.colors.primary.main};
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;
  `}
`;
