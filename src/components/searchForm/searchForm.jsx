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
    setPageNumber(null);
  };
  return (
    <SearchFormContainer onSubmit={handleOnSubmit}>      
      <Input        
        onChange={handleChange}
        placeholder="Type to search by name or model"
        type="text"
        value={searchTerm}
      />     
    </SearchFormContainer>
  );
};

export default SearchForm;
