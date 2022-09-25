import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
justify-content: center;
align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
  
`;

export const Input = styled.input`
  width: 100%;
  border: transparent;
  max-width: 600px;
  background: var(--white);
  padding: 1rem;
  font-size: 1rem;
  border-radius: var(--borderRadius);
  color: var(--grey-800);
  letter-spacing: var(--letterSpacing);
  margin-top: 1rem;
  
  @media screen and (max-width: 800px) {
    max-width: 500px;
  }
  @media screen and (max-width: 546px) {
    margin-left: -12px;
  }
`