import React from "react";
import "./header.css";
import SearchLightIcon from "./icons/SearchLightIcon";
import VerticalMenuLightIcon from "./icons/VerticalMenuLightIcon";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">WhatsApp</h1>
      <div className="icons">
        <SearchLightIcon />
        <VerticalMenuLightIcon />
      </div>
    </div>
  );
};

export default Header;
