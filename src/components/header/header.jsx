import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as StarWarsLogo } from "../../assets/logo.svg";
import { HeaderContainer, LogoContainer } from "./header.styles";

const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <StarWarsLogo />
        </Link>
        <h2>Starship Database</h2>
        </LogoContainer>
     
      </HeaderContainer>
      <Outlet />      
    </Fragment>
  );
};

export default Header;
