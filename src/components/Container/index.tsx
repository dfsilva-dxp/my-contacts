import styled, { css } from "styled-components";

const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container.default};
    margin: 0 auto;
    padding: 0 1rem;
  `}
`;

export default Container;
