import React, { useState } from 'react';
import { BrowserRouter as Router, Link, NavLink, Switch } from 'react-router-dom';
import usersApi from '../api/usersApi';
import "../components/login/Login";

const SignUp = () => {
    const [error, setError] = useState("");
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    // const navigate = NavLink;
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(data);
            const { data: res } = await usersApi.post("/api/users", data);
            <NavLink to="/login">
            </NavLink>
            console.log(res.message);
        }
        catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }

    }
    return <div>
        <div >
            <div>
                <h1>Welcome back!</h1>
                <Switch>
                <Router>
                    <Switch>
                        <Link to="/login">
                            <button className="btn">Log in</button>
                        </Link>
                    </Switch>
                </Router>
                </Switch>
            </div>
            <div>
                <form className="form-container" onSubmit={handleSubmit}>
                    <h2>Create Account</h2>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={handleChange}
                        value={data.firstName}
                        required
                        className="form-input"
                    ></input>
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        value={data.lastName}
                        required
                        className="form-input"
                    ></input>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                        className="form-input"
                    ></input>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className="form-input"
                    ></input>
                    {error && <div className="error-display">{error}</div>}
                    <button type="submit" className="submit btn">Sign Up</button>
                </form>
            </div>
        </div>
    </div>;
};

export default SignUp;
