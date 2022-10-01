import styled from "styled-components";


export const StarshipListContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
  padding-bottom:2rem;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 30px;
  row-gap: 32px;


  @media screen and (max-width: 590px) {
    justify-content: center;
  }
`;

export const NoResult = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
`
export const LoadButtonContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
