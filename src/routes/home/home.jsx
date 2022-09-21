import React from "react";
import SearchForm from "../../components/searchForm/searchForm";
import StarshipList from "../../components/starshipList/starshipList";
import ScrollToTop from "../../components/scrollToTop/scrollToTop";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <StarshipList />
      <ScrollToTop />
    </div>
  );
};

export default Home;
