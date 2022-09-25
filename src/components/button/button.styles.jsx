import styled from "styled-components";

export const BaseButton = styled.button`
  cursor: pointer;
  /* color: var(--grey-200); */
  /* background: var(--primary-500); */
  /* background: #fbe7a8; */
  background: #74b3e7;
  color: #1F2937 ;
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
    background: #b0d4f1;
    box-shadow: var(--shadow-3);

    color: var(--grey-100);
  }
`;
