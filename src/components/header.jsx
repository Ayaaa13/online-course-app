import React, { useState } from "react";
import Logo from "./logo";
import MainNavbar from "./main-navbar";
import NavbarButtons from "./navbar-buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HeaderDropdown from "./header-drop";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const SetDropdownActive = () => {
    setActive(true);
  };

  const SetDropdownInActive = () => {
    setActive(false);
  };

  return (
    <div className="header ">
      <Logo />
      <MainNavbar />
      <NavbarButtons />
      <FontAwesomeIcon
        className="bars"
        icon={faBars}
        onClick={SetDropdownActive}
      />
      {isActive && <HeaderDropdown />}
      {isActive && (
        <div className="overlay" onClick={SetDropdownInActive}></div>
      )}
    </div>
  );
};

export default Header;
