import React, { Fragment, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import StarshipPreviewCard from "../starship-preview/starship-preview-card";
import { getNextPage } from "../../utils/getId/utilFunctions";

const StarshipList = () => {
  const { data, pageNumber, setPageNumber } = useContext(AppContext);
  const [starshipsData, setStarshipsData] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const { results: starships, next } = data;

  useEffect(() => {
    if (pageNumber) {
      setStarshipsData((prevData) => {
        return [...prevData, ...starships];
      });
    } else {
      setStarshipsData(starships);
    }

    console.log(starshipsData);
    setNextPage(next);
  }, [data]);

  const handleLoadMore = () => {
    const pageNo = getNextPage(next);
    setPageNumber(pageNo);
  };

  return (
    <Fragment>
      <div className="starship-list-container">
        {starshipsData &&
          starshipsData.map((starship, index) => {
            return <StarshipPreviewCard key={index} starship={starship} />;
          })}
      </div>
      {nextPage && (
        <div className="load-btn-container">
          <button
            type="button"
            className="btn load-btn"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default StarshipList;
