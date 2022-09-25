import React, {Fragment} from "react";
import SearchForm from "../../components/searchForm/searchForm";
import StarshipList from "../../components/starshipList/starshipList";
import ScrollToTop from "../../components/scrollToTop/scrollToTop";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <SearchForm />
      <StarshipList />
      <ScrollToTop />
      <Outlet/>
    </Fragment>
  );
};

export default Home;
