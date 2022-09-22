import React, { useContext } from "react";
import { AppContext } from "../../context/context";
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
      <h2>search starships</h2>
      <Input
        
        onChange={handleChange}
        placeholder="please enter the name or the model"
        type="text"
        value={searchTerm}
      />
    </SearchFormContainer>
  );
};

export default SearchForm;
