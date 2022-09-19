import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as StarWarsLogo } from "../../assets/logo.svg";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <Link to="/">
          <StarWarsLogo />
        </Link>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Header;
