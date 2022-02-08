import React from 'react';
import { NavLink } from 'react-router-dom'
// import Login from "../login/Login";
import Register from "../Register";

const Home = () => {
  return <div>
    <h1>MUSIC MASTER</h1>
    <Register></Register>
    <button className="btn">
      <NavLink exact to="/login" className="nav-links" activeClassName='active'>
        login
      </NavLink>
    </button>
    <button className="btn">
      <NavLink exact to="/signup" className="nav-links" activeClassName='active'>
        signup
      </NavLink>
    </button>


  </div>;
};

export default Home;
