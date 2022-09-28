import styled from "styled-components";
import { Link } from "react-router-dom";

export const StarshipCardContainer = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 270px;
  height: 330px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.315);
  border-radius: 5px;
`;

export const InfoContainer = styled.div`
  background-color: var(--main--300);
  display: flex;
  opacity: 0.8;
  height: 5.5rem;
  align-items: center;
  padding: 0.5rem 0.5rem;
  top: 230px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  padding-bottom: 4px;

  p {
    font-size: 0.9rem;
    margin: 0.5rem;

    margin-top: 0;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin-top: 0;
`;

export const CardContainer = styled(Link)`
  margin: 0 auto;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    & ${StarshipCardContainer} {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      animation-name: focus2;
      animation-duration: 0.25s;
      border-left: 8px solid var(--mainYellow);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }

    & ${InfoContainer} {
      opacity: 1;
    }
  }
`;
