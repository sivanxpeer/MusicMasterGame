import React from 'react';
import { NavLink } from 'react-router-dom'
import "../NavBar/NavBar.css";


const Navbar = () => {
  return <>
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-links" activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/play" className="nav-links" activeClassName='active'>
              Play
            </NavLink>
          </li>
          <li className="nav-item disp">
            <NavLink exact to="/categories" className="nav-links categories" activeClassName='active'>
              Categories
            </NavLink>
          </li>
          <li className="nav-item disp" >
            <NavLink exact to="/leaders" className="nav-links" activeClassName='active'>
              Leaders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/logout" className="nav-links last-link" activeClassName='active'>
              Log Out
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>;
};

export default Navbar;
