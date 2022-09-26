import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Link } from "react-router-dom";
import Button from "../button/button";
import Error from "../error/error";
import { StarshipDetailContainer,DetailInfo, StarshipInfo, ReturnHomeButtonContainer } from "./starshipDetail.styles";

const StarshipDetail = () => {
  const { id } = useParams();
  const navigate= useNavigate()

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



  const handleNavigate=()=>{
    navigate("/");
  }
  if(error){
    return <Error/>
  }
  return (
    <div>   
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
        
     <h2 data-testid="name">{name}</h2>
        <p>Model: {model}</p>
        <p >Manufacturer: {manufacturer}</p>
        <p>Passengers: {passengers}</p>
        <p>Max Atmosphering Speed: {max_atmosphering_speed}</p>
        <p>Crew: {crew}</p>
        <p>Cargo capacity: {cargo_capacity}</p>        
      </DetailInfo>
      </StarshipInfo>
    </StarshipDetailContainer>
    <ReturnHomeButtonContainer>
    <Button onClick={handleNavigate}>Go Back</Button>
    </ReturnHomeButtonContainer>
    {/* <Link to="/" className="btn">
          back to homepage
        </Link> */}

    </div>
  );
};

export default StarshipDetail;
