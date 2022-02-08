import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import usersApi from '../../api/usersApi';
import './Login.css';

const Login = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      const { data: res } = await usersApi.post("/api/auth", data);
      localStorage.setItem("token", res.data);
      window.location = "/";
      console.log(res.message);
    }
    catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
      }
    }

  }

  // const goToPage = () => {

  // }
  return <div>
    <div>
      <div>
        <h2>New Here?</h2>
        {/* <Switch> */}
        <NavLink exact to="/signup" className="nav-links" activeClassName='active'>
          SignUp
        </NavLink>
        {/* <Link to="/signup">
          <button className="btn">sign up</button>
        </Link> */}
      </div>
      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Log in</h2>
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
          <button type="submit" className="submit btn">Sign In</button>
        </form>
      </div>

    </div>
  </div>;
};

export default Login;
