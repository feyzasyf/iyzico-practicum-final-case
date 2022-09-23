import styled from "styled-components";

export const BaseButton = styled.button`
  cursor: pointer;
  color: var(--grey-200);
  background: var(--primary-500);
  border: transparent;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  box-shadow: var(--shadow-1);
  transition: 0.3s ease-in-out all;
  text-transform: capitalize;
  display: inline-block;
  
  &:hover {
    background: var(--primary-400);
    box-shadow: var(--shadow-3);
  
    color: var(--grey-100)
  }
`;
