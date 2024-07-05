import styled, { css } from "styled-components";

export const TableContainer = styled.main`
  margin-top: 1rem;
`;

export const TableWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 0 1rem;

  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

export const Table = styled.table`
  ${({ theme }) => css`
    min-width: 38rem;
    height: 100%;
    table-layout: auto;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    text-align: left;

    thead {
      text-transform: uppercase;
      font-size: 0.75rem;
    }

    tbody {
      padding-top: 2rem;
      font-size: 0.75rem;
      color: ${theme.colors.gray[200]};

      tr {
        box-sizing: border-box;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
      }

      td:first-child {
        color: ${theme.colors.primary.main};
        font-size: 0.875rem;
        font-weight: ${theme.font.weight.bold};
      }

      td {
        padding: 0.5rem;
        background-color: ${theme.colors.white};
        vertical-align: middle;

        &:first-child {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        &:last-child {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }
      }
    }
  `}
`;
