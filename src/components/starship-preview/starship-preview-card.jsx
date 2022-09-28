import React,{useContext} from "react";
import { getUrlId } from "../../utils/utilFunctions";
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
 const imageUrl= require(`../../assets/starshipImages/${id}.jpg`);


  return (
    <CardContainer to={`/starship/${id}`}>
      <StarshipCardContainer  imageUrl={imageUrl} >
        <InfoContainer>
          <div >
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
