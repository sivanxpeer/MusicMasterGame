import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api/api';
import './Login.css';

const Login = () => {
  
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  }

  const handleSubmit = async (e) => {
    console.log("clicked")
    e.preventDefault();
    try {
      console.log(data);
      const { data: res } = await Api.post("/api/auth", data);
      console.log(res.data,"token")
      localStorage.setItem("token", res.data);
      window.location = "/play";
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
    <div className="log-toggle">
      <div className="goto">
        <h2 className="form-title">New Here?</h2>
        {/* <Switch> */}
        <Link to="/signup" className="link signup">
          SignUp
        </Link>
        {/* <Link to="/signup">
          <button className="btn">sign up</button>
        </Link> */}
      </div>
      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          <h2 className="form-title">Log in</h2>
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
