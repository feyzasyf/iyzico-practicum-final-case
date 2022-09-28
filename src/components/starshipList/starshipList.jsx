import React, { Fragment, useContext} from "react";
import { AppContext } from "../../context/appContext";
import StarshipPreviewCard from "../starship-preview/starship-preview-card";
import Loading from "../loading/loading";
import { getNextPage } from "../../utils/utilFunctions";
import Button from "../button/button";
import Error from "../error/error";
import {
  StarshipListContainer,
  LoadButtonContainer,  
  NoResult,
} from "./starshipList.styles";


const StarshipList = () => {
 
  const {
    itemList: starships,
    next,
    setPageNumber,
    loading,
    error
  } = useContext(AppContext);


  const handleLoadMore = () => {
    const pageNo = getNextPage(next);
    setPageNumber(pageNo);
  };


  if(error){
    return <Error/>
  }
  if (loading && starships.length === 0) {
    return <Loading />;
  }
  if(starships.length === 0){
    return(<NoResult data-testid="noresult">No matching results found...</NoResult>)
  }
  return (
    <Fragment>
    
      <StarshipListContainer>
        {
          starships.map((starship, index) => {
            return <StarshipPreviewCard key={index} starship={starship} />;
          })
        }
      </StarshipListContainer>
      {next && (
        <LoadButtonContainer>
          <Button data-testid="load btn" onClick={handleLoadMore} type="button">
            {loading ? "loading..." : "Load More"}
          </Button>
        </LoadButtonContainer>
      )}
    </Fragment>
  );
};

export default StarshipList;
