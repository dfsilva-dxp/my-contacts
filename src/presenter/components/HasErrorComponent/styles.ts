import styled, { css } from "styled-components";

import { Flex } from "@/presenter/components";

export const FlexWarraper = styled(Flex)`
  ${({ theme }) => css`
    padding: 1rem 0;

    h4 {
      max-width: 20ch;
      color: ${theme.colors.danger.main};
      word-wrap: break-word;
    }
  `}
`;
