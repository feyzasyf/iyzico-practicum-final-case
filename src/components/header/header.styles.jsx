import styled from "styled-components";

export const HeaderContainer = styled.nav`
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #d1d5db;
  background: url(${require("../../assets/battle99.jpeg")}) no-repeat center
    center;
  background: -moz-linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${require("../../assets/battle99.jpeg")}) no-repeat center center;
  background: -webkit-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("images/battle65.jpeg");
  background: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${require("../../assets/battle99.jpeg")}) no-repeat center center;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${require("../../assets/battle99.jpeg")}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 1192px) {
    height: 10rem;
  }
  @media screen and (max-width: 779px) {
    height: 9rem;
  }
  @media screen and (max-width: 576px) {
    height: 8rem;
  }
`;
export const LogoContainer = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
    margin-top: -1rem;
  }

  @media screen and (max-width: 1192px) {
    margin-top: 0rem;

    h2 {
      font-size: 1.75rem;
      margin-top: -2rem;
    }
  }

  @media screen and (max-width: 874px) {
    width: 70%;
    margin-top: 0rem;

    h2 {
      font-size: 1.5rem;
      margin-top: -2rem;
    }
  }
`;
