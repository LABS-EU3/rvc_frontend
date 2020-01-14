import React  from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions';

const Navigation = () => { 
  const isLoggedIn = localStorage.getItem('token');
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
    <Link to='/createrecipe' style={{ textDecoration: 'none' }}>
    <li>Create</li>
    </Link>
    {isLoggedIn ? <li onClick={() => { logout()}}>Logout</li>  : <li><Link to="/login">Log in</Link></li>}
    {/* <Link to='/' style={{ textDecoration: 'none' }}>
    <li onClick={() => { logout()}}>Logout</li>
      </Link> */}
    </ul>
    </div>
    </nav>
    </div>
    )
  }
  
  export default Navigation;