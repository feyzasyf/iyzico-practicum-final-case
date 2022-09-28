import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Button from "../button/button";
import Error from "../error/error";
import Loading from "../loading/loading";
import {
  StarshipDetailContainer,
  DetailInfo,
  StarshipInfo,
  ReturnHomeButtonContainer,
} from "./starshipDetail.styles";

const StarshipDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { response: starship, loading, error } = useFetchData({ id });

  const {
    name,
    model,
    passengers,
    manufacturer,
    max_atmosphering_speed,
    crew,
    cargo_capacity,
  } = starship;

  const handleNavigate = () => {
    navigate("/");
  };


  
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <StarshipDetailContainer>
        <StarshipInfo>        
          <img
            src={require(`../../assets/starshipImages/${id}.jpg`)}            
          />         

          <DetailInfo>
            <h2 data-testid="name">{name}</h2>
            <p data-testid="modelName">Model: {model}</p>
            <p data-testid="manuf">Manufacturer: {manufacturer}</p>
            <p data-testid="passenger">Passengers: {passengers}</p>
            <p data-testid="speed">Max Atmosphering Speed: {max_atmosphering_speed}</p>
            <p data-testid="crew">Crew: {crew}</p>
            <p data-testid="cargo">Cargo capacity: {cargo_capacity}</p>
          </DetailInfo>
        </StarshipInfo>
      </StarshipDetailContainer>
      <ReturnHomeButtonContainer>
        <Button onClick={handleNavigate}>Go Back</Button>
      </ReturnHomeButtonContainer>
    </div>
  );
};

export default StarshipDetail;
