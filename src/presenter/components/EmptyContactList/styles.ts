import styled, { css } from "styled-components";

export const NotFoundMessage = styled.p`
  ${({ theme }) => css`
    max-width: 40ch;
    font-size: 1rem;
    color: ${theme.colors.gray[200]};
    text-align: center;
    word-wrap: break-word;

    strong {
      color: ${theme.colors.primary.main};
    }
  `}
`;
