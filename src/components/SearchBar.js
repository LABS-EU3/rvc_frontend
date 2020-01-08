import React  from 'react';
import { SearchBox } from '../globals/navbar-styles';
import { Link } from 'react-router-dom';
import { logout } from '../actions';

const SearchBar = ({ recipe }) => {

  return (
    <div>
      <div>
        <SearchBox>
          <input
            type='text'
            placeholder='search recipes...'/>
          <div className='menu-container'>
            <nav role='navigation'>
              <div id='menuToggle'>
                <input type='checkbox' />
                <span></span>
                <span></span>
                <span></span>
                <ul id='menu'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <li>Home</li>
                  </Link>
                  <Link to='/register' style={{ textDecoration: 'none' }}>
                  <li>Profile</li>
                  </Link>
                  <Link to='/register' style={{ textDecoration: 'none' }}>
                  <li>Log in</li>
                  </Link>
                  <Link to='/' style={{ textDecoration: 'none' }}>
                  <li onClick={() => { logout()}}>Logout</li>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
        </SearchBox>
      </div>
    </div>
  );
};

export default SearchBar;
