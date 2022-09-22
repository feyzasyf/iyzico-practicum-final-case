import React from "react";
import SearchForm from "../../components/searchForm/searchForm";
import StarshipList from "../../components/starshipList/starshipList";
import ScrollToTop from "../../components/scrollToTop/scrollToTop";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <StarshipList />
      <ScrollToTop />
      <Outlet/>
    </div>
  );
};

export default Home;
