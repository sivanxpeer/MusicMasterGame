import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../api/api';
// import "../components/login/Login";

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
            const { data: res } = await Api.post("/api/users", data);
            <Link to="/login">
            </Link>
            console.log(res.message);
        }
        catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }

    }
    return <div>
        <div className="log-toggle">
            <div className="goto login">
                <h2 className="form-title">Welcome back!</h2>
                <Link to="/login" className="link login">
                    Log in
                </Link>
            </div>
            <div>
                <form className="form-container" onSubmit={handleSubmit}>
                    <h2 className="form-title">Create Account</h2>
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
