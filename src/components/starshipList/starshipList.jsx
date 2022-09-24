import React, { Fragment, useContext} from "react";
import { AppContext } from "../../context/context";
import StarshipPreviewCard from "../starship-preview/starship-preview-card";
import Loading from "../loading/loading";
import { getNextPage } from "../../utils/getId/utilFunctions";
import {
  StarshipListContainer,
  LoadButtonContainer,
  LoadButton,
  NoResult,
} from "./starshipList.styles";


const StarshipList = () => {
  console.log("starship List rendered")
  const {
    itemList: starships,
    next,
    setPageNumber,
    loading,
  } = useContext(AppContext);


  const handleLoadMore = () => {
    const pageNo = getNextPage(next);
    setPageNumber(pageNo);
  };



  if (loading && starships.length == 0) {
    return <Loading />;
  }
  return (
    <Fragment>
      <StarshipListContainer>
        {starships.length == 0 ? (
          <NoResult>No matching results found...</NoResult>
        ) : (
          starships.map((starship, index) => {
            return <StarshipPreviewCard key={index} starship={starship} />;
          })
        )}
      </StarshipListContainer>
      {next && (
        <LoadButtonContainer>
          <LoadButton onClick={handleLoadMore} type="button">
            {loading ? "loading..." : "Load More"}
          </LoadButton>
        </LoadButtonContainer>
      )}
    </Fragment>
  );
};

export default StarshipList;
