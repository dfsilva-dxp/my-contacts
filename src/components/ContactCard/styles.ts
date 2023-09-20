import styled, { DefaultTheme, css } from "styled-components";

export const ContactCardContent = styled.span`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.white};
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

    & + span {
      margin-top: 1rem;
    }
  `}
`;

export const ContactCardInfo = styled.span`
  ${({ theme }) => css`
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
    cursor: pointer;
    transition: filter 0.15s ease-in-out;

    ${buttonVariant[color](theme)}

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
