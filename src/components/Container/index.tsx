import styled, { css } from "styled-components";

const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container.default};
    margin: 0 auto;
  `}
`;

export default Container;
