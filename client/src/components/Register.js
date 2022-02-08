import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return <div className="register">
        <NavLink exact to="/login">
            <button className="btn">Login</button>
        </NavLink>
        <NavLink exact to="/signup">
            <button className="btn">Sign Up</button>
        </NavLink>
    </div>;
};

export default Register;
