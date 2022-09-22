import styled from "styled-components";
import Button from "../button/button";

export const StarshipListContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 90%;

  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;

  @media screen and (max-width: 590px) {
    justify-content: center;
  }
`;
export const LoadButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadButton = styled(Button)`
  padding: 1.25rem 5rem;

  margin-bottom: 2rem;
`;
