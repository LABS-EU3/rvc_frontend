import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../actions";
const Navigation = () => {
  const isLoggedIn = localStorage.getItem("token");
  return (
    <div className="menu-container">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            {isLoggedIn ? (
              <div>
                <li>
                  <Link to="/createrecipe">Create</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li
                  onClick={() => {
                    logout();
                  }}
                >
                  <Link to="/login">Logout</Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/login">Log in</Link>
                </li>{" "}
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
