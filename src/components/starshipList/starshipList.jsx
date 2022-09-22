import React, { Fragment, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import StarshipPreviewCard from "../starship-preview/starship-preview-card";
import Loading from "../loading/loading";
import { getNextPage } from "../../utils/getId/utilFunctions";
import { StarshipListContainer, LoadButtonContainer,LoadButton } from "./starshipList.styles";



const StarshipList = () => {
  const { data, pageNumber, setPageNumber, loading } = useContext(AppContext);
  const [starshipsData, setStarshipsData] = useState([]);
  const { results: starships, next } = data;


  // move this useEffect code into context
  useEffect(() => {
    if (pageNumber) {
      if (starshipsData.length == 0) {
        setPageNumber(null);
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

 <StarshipListContainer>
        {starshipsData &&
          starshipsData.map((starship, index) => {
            return <StarshipPreviewCard key={index} starship={starship} />;
          })}
      </StarshipListContainer> 
      {next && (
        <LoadButtonContainer>
          <LoadButton       
           
            onClick={handleLoadMore}
            type="button"
          >
            {loading ? "loading..." : "Load More"}
          </LoadButton>
        </LoadButtonContainer>
      )}
    </Fragment>
  );
};

export default StarshipList;
