import React, { useState } from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked)
    console.log(clicked)
  }
  return <>
    <nav className="navbar">
      <div className="nav-container">
        {/* <NavLink exact to="/" className="nav-logo" activeClassName='active'>
          Music
          <i className="fas fa-music"></i>
        </NavLink> */}
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
          <li className="nav-item">
            <NavLink exact to="/leaders" className="nav-links" activeClassName='active'>
              Leaders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/logout" className="nav-links" activeClassName='active'>
              Log Out
            </NavLink>
          </li>
        </ul>
        <button className="nav-icon" onClick={handleClick}>
          <i className={clicked? "fas fa-times" : "fas fa-bars"}></i>
        </button>

      </div>
    </nav>
  </>;
};

export default NavBar;
