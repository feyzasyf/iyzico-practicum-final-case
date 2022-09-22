import styled from "styled-components";

export const BaseButton = styled.button`
  cursor: pointer;
  color: white;
  background: black;
  border: transparent;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  box-shadow: var(--shadow-1);
  transition: 0.3s ease-in-out all;
  text-transform: capitalize;
  display: inline-block;
  
  &:hover {
    background: var(--grey-700);
    box-shadow: var(--shadow-3);
  }
`;
