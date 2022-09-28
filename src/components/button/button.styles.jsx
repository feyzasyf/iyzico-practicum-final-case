import styled from "styled-components";

export const BaseButton = styled.button`
  cursor: pointer;
  background: var(--blue-300);
  border: transparent;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  font-size: 1rem;
  box-shadow: var(--shadow-1);
  transition: 0.3s ease-in-out all;
  text-transform: capitalize;
  display: inline-block;
  padding: 1.25rem 5rem;
  margin-bottom: 2rem;

  &:hover {
    /* background: var(--primary-400); */
    background: var(--blue-200);
    box-shadow: var(--shadow-3);
    color: var(--grey-100);
  }
`;
