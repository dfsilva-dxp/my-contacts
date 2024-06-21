import styled, { css } from "styled-components";

import { IFlexProps } from ".";

type FlexContentType = {
  gap:
    | "0"
    | "0.25rem"
    | "0.5rem"
    | "1rem"
    | "1.125rem"
    | "1.25rem"
    | "1.375rem"
    | "1.5rem"
    | "1.625rem"
    | "1.75rem"
    | "1.185rem"
    | "2rem";
} & Omit<IFlexProps, "children" | "gap">;

export const FlexContent = styled.div<FlexContentType>`
  ${({ display, direction, align, justify, content, wrap, gap }) => css`
    display: ${display};
    flex-direction: ${direction};
    align-items: ${align};
    align-content: ${content};
    justify-content: ${justify};
    flex-wrap: ${wrap};
    gap: ${gap};
  `}
`;
