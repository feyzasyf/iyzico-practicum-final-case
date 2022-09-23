import styled from "styled-components";

export const StarshipDetailContainer = styled.section`
  padding: 0.5rem;
`;

export const StarshipInfo = styled.div`
  width: 85vw;
  max-width: 1170px;
  margin: 0 auto;
  margin-top: 4rem;
  text-align: left;

  background-color: #cddae4;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-left: 15px solid #f6c225;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 3rem;

    align-items: center;
  }

  @media screen and (max-width: 992px) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 476px) {
    margin-top: 1rem;
    border-left: 10px solid #f6c225;
  }
`;

export const ImageContainer = styled.div`
  img {
    border-radius: var(--mainBorderRadius);
    object-fit: cover;
  }
`;

export const DetailInfo = styled.div`
  padding-left: 10px;
  p {
    max-width: 35em;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    line-height: 1.2;
  }
  @media screen and (min-width: 992px) {
    padding-top: 0;
  }
  @media screen and (max-width: 476px) {
    h2 {
      margin-top: 8px;
    }
    p {
      font-size: 1rem;
      margin-top: 8px;
    }
  }
`;
