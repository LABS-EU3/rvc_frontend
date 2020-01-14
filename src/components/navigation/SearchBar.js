import React  from 'react';
import { SearchBox } from '../../globals/navbar-styles';
import { Link } from 'react-router-dom';
import { logout } from '../../actions';
import Navigation from './Navigation';

const SearchBar = ({ recipe }) => {

  return (
    <div>
      <div>
        <SearchBox>
          <input
            type='text'
            placeholder='search recipes...'/>
          <Navigation/>
        </SearchBox>
      </div>
    </div>
  );
};

export default SearchBar;
