import styled, { css } from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ScrollButton = styled.button`
  opacity: 0;
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 5%;
  left: 92%;
  border-radius: 50%;
  border: 2px solid #74b3e7;
  background: #74b3e7;
  color: white;
  cursor: pointer;
  text-align: center;
  z-index: 20;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
    `}
`;

export const ScrollIcon = styled(AiOutlineArrowUp)`
  width: 70%;
  height: auto;
`;
