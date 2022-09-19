import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import StarshipPreviewCard from "../starship-preview/starship-preview-card";

const StarshipList = () => {
  const { starships } = useContext(AppContext);

  return (
    <div className="starship-list-container">
      {starships &&
        starships.map((starship, index) => {
          return <StarshipPreviewCard key={index} starship={starship} />;
        })}

      <button className="btn load-btn">Load More</button>
    </div>
  );
};

export default StarshipList;
