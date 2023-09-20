import styled, { css } from "styled-components";
import * as Select from "@radix-ui/react-select";

export const SelectTriggerContent = styled(Select.SelectTrigger)`
  ${({ theme }) => css`
    width: 100%;
    height: 3.125rem;
    padding: 0.5rem 1rem;
    background: ${theme.colors.white};
    border: 2px solid transparent;
    border-radius: 0.25rem;

    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

    flex-shrink: 0;

    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    &:focus {
      box-shadow: 0 0 0 2px ${theme.colors.primary.main};
    }

    &[data-placeholder] {
      color: ${theme.colors.gray[200]};
    }

    & button {
      margin-top: 0;
    }
  `}
`;

export const SelectIcon = styled(Select.Icon)`
  ${({ theme }) => css`
    color: ${theme.colors.gray[900]};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const SelectContent = styled(Select.Content)`
  ${({ theme }) => css`
    overflow: hidden;
    background-color: ${theme.colors.white};
    border-radius: 0.25rem;
    box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
      0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  `}
`;

export const SelectScrollUpButton = styled(Select.ScrollUpButton)`
  ${({ theme }) => css`
    height: 1.5625rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray[900]};
    cursor: default;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const SelectViewport = styled(Select.Viewport)`
  padding: 5px;
`;

export const SelectLabel = styled(Select.Label)`
  ${({ theme }) => css`
    padding: 0 1.5625rem;
    font-size: 12px;
    line-height: 1.5625rem;
    color: ${theme.colors.gray[200]};
  `}
`;

export const SelectGroup = styled(Select.Group)``;

export const SelectItem = styled(Select.Item)`
  ${({ theme }) => css`
    font-size: 13px;
    line-height: 1;
    border-radius: 0.25rem;
    height: 1.5625rem;
    padding: 0 2.1875rem 0 1.5625rem;
    position: relative;
    user-select: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &[data-disabled] {
      color: ${theme.colors.gray[100]};
      pointer-events: none;
    }
    &[data-highlighted] {
      outline: none;
      background-color: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.dark};
    }
  `}
`;

export const SelectItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 1.5625rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
