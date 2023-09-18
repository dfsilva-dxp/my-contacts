import styled, { DefaultTheme, css } from "styled-components";

const ContactCardFlexAlign = css`
  display: inline-flex;
  align-items: center;
`;

export const ContactCardContent = styled.span`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.white};
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

    ${ContactCardFlexAlign}
    justify-content: space-between;

    & + span {
      margin-top: 1rem;
    }
  `}
`;

export const ContactCardInfo = styled.span`
  ${({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.25rem;

    strong {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    small {
      font-size: 0.875rem;
      color: ${theme.colors.gray[200]};
    }
  `}
`;

export const ContactCardButtonsGroup = styled.span`
  display: inline-flex;
  justify-content: center;
  gap: 0.5rem;
`;

interface IContactCardButtonProps {
  color?: "blue" | "red";
}

const buttonVariant = {
  blue: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary.main};
  `,
  red: (theme: DefaultTheme) => css`
    color: ${theme.colors.danger.main};
  `
};

export const ContactCardButton = styled.span<IContactCardButtonProps>`
  ${({ theme, color = "blue" }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: filter 0.15s ease-in-out;

    ${buttonVariant[color](theme)}

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
