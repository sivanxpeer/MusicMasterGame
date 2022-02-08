import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "../login/Login";
import SignUp from "../SignUp";
import Register from "../Register";

const Home = () => {
  return <div>
    <h1>MUSIC MASTER</h1>
    <Register>
    </Register>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
    {/* <button className="btn">
      <NavLink exact to="/login" className="nav-links" activeClassName='active'>
        login
      </NavLink>
    </button>
    <button className="btn">
      <NavLink exact to="/signup" className="nav-links" activeClassName='active'>
        signup
      </NavLink>
    </button> */}


  </div>;
};

export default Home;
