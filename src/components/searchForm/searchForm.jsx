import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { SearchFormContainer, Input } from "./searchForm.styles";
import { debounce } from "../../utils/utilFunctions";


const SearchForm = () => {
  const { setSearchTerm, setPageNumber } = useContext(AppContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };


  const startSearch =debounce(text=>{
    setSearchTerm(text);
     //when the input changes we also set pageNumber to null,
    //so that the results from the first page of our search will be fetched and set and shown
    setPageNumber(null);
  }, 1000)
  

  const handleChange = (e) => {
    startSearch(e.target.value);
   
  };


  
  return (
    <SearchFormContainer onSubmit={handleOnSubmit}>      
      <Input        
        onChange={handleChange}
        placeholder="Type to search by name or model"
        type="search"
     
      />     
    </SearchFormContainer>
  );
};

export default SearchForm;
