import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return <div className="register">
        <Link to="/login">
            <button className="btn">Login</button>
        </Link>
        <Link to="/signup">
            <button className="btn">Sign Up</button>
        </Link>
    </div>;
};

export default Register;
