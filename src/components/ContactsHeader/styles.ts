import styled, { css } from "styled-components";

export const ContactHeaderContent = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${theme.colors.gray[200]};

    strong {
      font-size: 1.5rem;
      line-height: normal;
    }
  `}
`;
