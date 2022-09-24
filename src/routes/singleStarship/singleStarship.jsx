import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Link } from "react-router-dom";
import { StarshipDetailContainer,DetailInfo, StarshipInfo } from "./singleStarship.styles";

const SingleStarship = () => {
  const { id } = useParams();

  const { response: starship, loading, error }  = useFetchData({id});

  const {
    name,
    model,
    passengers,
    manufacturer,
    max_atmosphering_speed,
    crew,
    cargo_capacity,
  } = starship;
  return (
    <StarshipDetailContainer>
   <StarshipInfo>
      <img
        className="starship-img"
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        onError={(e) => {
          e.target.src =
            "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
        }}
      />
      
      
      <DetailInfo>
        
     <h2>{name}</h2>
        <p>Model: {model}</p>
        <p>Manufacturer: {manufacturer}</p>
        <p>Passengers: {passengers}</p>
        <p>Max Atmosphering Speed: {max_atmosphering_speed}</p>
        <p>Crew: {crew}</p>
        <p>Cargo capacity: {cargo_capacity}</p>
        <Link to="/" className="btn">
          back to homepage
        </Link>
      </DetailInfo>
      </StarshipInfo>
    </StarshipDetailContainer>
  );
};

export default SingleStarship;
