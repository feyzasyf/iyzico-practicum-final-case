import React, { Fragment, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import StarshipPreviewCard from "../starship-preview/starship-preview-card";
import Loading from "../loading/loading";
import { getNextPage } from "../../utils/getId/utilFunctions";

const StarshipList = () => {
  const { data, pageNumber, setPageNumber, loading } = useContext(AppContext);
  const [starshipsData, setStarshipsData] = useState([]);
  const { results: starships, next } = data;

  useEffect(() => {
    if (pageNumber) {
      if (starshipsData.length == 0) {
        setPageNumber("");
      } else {
        setStarshipsData((prevData) => {
          return [...prevData, ...starships];
        });
      }
    } else {
      if (starships) setStarshipsData(starships);
    }
  }, [data]);

  const handleLoadMore = () => {
    const pageNo = getNextPage(next);
    setPageNumber(pageNo);
  };

  if (loading && starshipsData.length == 0) {
    return <Loading />;
  }
  return (
    <Fragment>
      <div className="starship-list-container">
        {starshipsData &&
          starshipsData.map((starship, index) => {
            return <StarshipPreviewCard key={index} starship={starship} />;
          })}
      </div>
      {next && (
        <div className="load-btn-container">
          <button
            type="button"
            className="btn load-btn"
            onClick={handleLoadMore}
          >
            {loading ? "loading..." : "Load More"}
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default StarshipList;
