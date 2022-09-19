import React from "react";
import { getUrlId } from "../../utils/getId/getStarshipId";
import { Link } from "react-router-dom";

const StarshipPreviewCard = ({ starship }) => {
  const { name, model, hyperdrive_rating, url } = starship;
  const id = getUrlId(url);

  return (
    <Link to={`/starship/${id}`}>
      <article className="starship-card">
        <img
          className="starship-img"
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          onError={(e) => {
            e.target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
        />

        <div className="starship-footer">
          <h4>{name}</h4>
          <p>model: {model}</p>
          <p>hr: {hyperdrive_rating}</p>
        </div>
      </article>
    </Link>
  );
};

export default StarshipPreviewCard;
