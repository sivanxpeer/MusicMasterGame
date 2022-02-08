import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Pages/Home';
import Leaders from './components/Pages/Leaders';
import Play from './components/Pages/Play';
import Category from './components/Pages/Category';
// import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar></Navbar> */}
        <div className="pages">
          <Switch>
              {/* <Link to="/register" component={Register} />  */}

            <Route exact path="/" component={Home} />
            <Route exact path="/leaders" component={Leaders} />
            <Route exact path="/play" component={Play} />
            <Route exact path="/categories" component={Category} />
            {/* <Route exact path="/" component={Home} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
