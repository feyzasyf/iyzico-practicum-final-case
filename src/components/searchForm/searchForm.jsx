import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { SearchFormContainer, Input } from "./searchForm.styles";


const SearchForm = () => {
  const { searchTerm, setSearchTerm, setPageNumber } = useContext(AppContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {

    setSearchTerm(e.target.value);
    //when the input changes we also set pageNumber to null,
    //so that the results from the first page of our search will be fetched and set and shown
    setPageNumber(null);
  };


  
  return (
    <SearchFormContainer onSubmit={handleOnSubmit}>      
      <Input        
        onChange={handleChange}
        placeholder="Type to search by name or model"
        type="search"
        value={searchTerm}
      />     
    </SearchFormContainer>
  );
};

export default SearchForm;
