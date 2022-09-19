import React, { useContext } from "react";
import { AppContext } from "../../context/context";

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <form className="search-form-container" onSubmit={handleOnSubmit}>
      <h2>search starships</h2>
      <input
        className="form-input"
        onChange={handleChange}
        placeholder="please enter the name or the model"
        type="text"
        value={searchTerm}
      />
    </form>
  );
};

export default SearchForm;
