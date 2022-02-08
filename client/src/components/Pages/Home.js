import React from 'react';
import { NavLink } from 'react-router-dom';
import Register from '../Register';

const Home = () => {
  return <div>
    <h1>MUSIC MASTER</h1>
    <ul className="nav-menu">
      <li className="nav-item">
        <NavLink exact to="/login" className="nav-links" activeClassName='active'>
          login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/signup" className="nav-links" activeClassName='active'>
          signup
        </NavLink>
      </li>
    </ul>
    {/* <Link to="/register" exact component={Register}></Link> */}
    {/* <Register></Register> */}
  </div>;
};

export default Home;
