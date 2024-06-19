import styled, { css, keyframes } from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  backdrop-filter: blur(0.2rem);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const animloader = keyframes`
      0%,
      100% {
        transform: scale(0);
        opacity: 1;
      }
      50% {
        transform: scale(1);
        opacity: 0;
      }
`;

export const Spinner = styled.div`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    display: inline-block;
    position: relative;

    &::after,
    &::before {
      content: "";
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: ${theme.colors.white};
      position: absolute;
      left: 0;
      top: 0;
      box-sizing: border-box;
      animation: ${animloader} 2s ease-in-out infinite;
    }

    &::after {
      animation-delay: 1s;
    }
  `}
`;
