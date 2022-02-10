import React from 'react';
import { Link } from 'react-router-dom'
import "./NavBar.css";


const NavBar = () => {
  const handleLogOut=()=>{
    localStorage.removeItem("token");
    window.location.reload();

  }
  return <>
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links" >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/play" className="nav-links" >
              Play
            </Link>
          </li>
          <li className="nav-item disp">
            <Link to="/categories" className="nav-links categories" >
              Categories
            </Link>
          </li>
          <li className="nav-item disp" >
            <Link to="/leaders" className="nav-links" >
              Leaders
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-links last-link" 
            onClick={handleLogOut}>
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>;
};

export default NavBar;
