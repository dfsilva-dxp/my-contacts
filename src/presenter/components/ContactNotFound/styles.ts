import styled, { css } from "styled-components";

export const EmptyMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
  `}
`;
