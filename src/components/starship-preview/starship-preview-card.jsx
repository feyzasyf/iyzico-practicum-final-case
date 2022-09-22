import React from "react";
import { getUrlId } from "../../utils/getId/utilFunctions";
import { Link } from "react-router-dom";
import { CardContainer, InfoContainer, StarshipCardContainer, Title } from "./starship-preview-card.styles";

const StarshipPreviewCard = ({ starship }) => {
  const { name, model, hyperdrive_rating, url } = starship;

  const id = getUrlId(url);
  const imageUrl= `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <CardContainer to={`/starship/${id}`}>
      <StarshipCardContainer imageUrl={imageUrl}>
      
   
   <InfoContainer>
 
    <div className="container__profile__text">
     <Title>{name}</Title>
     <p>{model}</p>
     <p>{hyperdrive_rating}</p>
    </div>
   </InfoContainer>
  
      </StarshipCardContainer>
    </CardContainer>
  );
};

export default StarshipPreviewCard;
