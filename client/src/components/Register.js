import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Login from './login/Login';
import SignUp from './SignUp';

const Register = () => {
    return <div className="register">
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>

        </Router>
        <SignUp></SignUp>
    </div>;
};

export default Register;
