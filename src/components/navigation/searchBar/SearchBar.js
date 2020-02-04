import React from "react";
import { SearchBox } from "./SearchBar.styles";
import Navigation from "../hamburgerNav/HamburgerNav";

const SearchBar = () => {
  return (
    <div>
      <div>
        <SearchBox>
          <input type="text" placeholder="search recipes..." />
          <Navigation />
        </SearchBox>
      </div>
    </div>
  );
};

export default SearchBar;


