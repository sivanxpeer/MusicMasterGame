import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Pages/Home';
import Leaders from './components/Pages/Leaders';
import Play from './components/Pages/Play';
import Category from './components/Pages/Category';
import Navbar from './components/navbar1/NavBar';
import Login from './components/login/Login'
import SignUp from './components/SignUp'
import Register from './components/Register'

function App() {
  const user = localStorage.getItem('token')

  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <div className="pages">
          <Switch>
            {/* <Link to="/register" component={Register} />  */}
            <Route exact path="/" component={Home} />
            <Route exact path="/leaders" component={Leaders} />
            {user && <Route exact path="/play" component={Play} />}
            {/* { <Route exact path="/play" component={Play} />} */}
            {user && <Route exact path="/categories" component={Category} />}
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
