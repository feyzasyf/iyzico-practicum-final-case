import React,{useContext} from "react";
import { getUrlId } from "../../utils/getId/utilFunctions";
import Highlighted from "../highlighted/highlighted";
import { AppContext } from "../../context/appContext";
import {
  CardContainer,
  InfoContainer,
  StarshipCardContainer,
  Title,
} from "./starship-preview-card.styles";




const StarshipPreviewCard = ({ starship }) => {
  const { name, model, hyperdrive_rating, url } = starship;
  const {searchTerm}= useContext(AppContext);

  const id = getUrlId(url);
  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <CardContainer to={`/starship/${id}`}>
      <StarshipCardContainer  imageUrl={imageUrl} >
        <InfoContainer>
          <div className="container__profile__text">
            <Title data-testid="Title"><Highlighted text={name} highlight={searchTerm}></Highlighted></Title>
            <p data-testid="Model"><Highlighted text={`Model: ${model}`} highlight={searchTerm}></Highlighted></p>
            <p data-testid="Rating">Hyperdrive Rating: {hyperdrive_rating}</p>
          </div>
        </InfoContainer>
      </StarshipCardContainer>
    </CardContainer>
  );
};

export default StarshipPreviewCard;
