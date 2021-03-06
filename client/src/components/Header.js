import React from "react";
import "./Header.css";
import siteicon from "../icons/siteicon.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink
        exact="true"
        activeclassname="active"
        className="home-link"
        to="/"
      >
        <img src={siteicon} className="header__logo" alt="icon" />
      </NavLink>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Tony</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <NavLink exact="true" activeclassname='active' to='/checkout'>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
