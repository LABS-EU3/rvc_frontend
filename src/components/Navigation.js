import React  from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions';

const Navigation = () => { 
  return (
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
    <Link to='/profile' style={{ textDecoration: 'none' }}>
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
    )
  }
  
  export default Navigation;