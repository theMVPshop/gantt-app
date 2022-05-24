import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./Login.css";
import vector from "../../images/Vectors.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const url = "https://gantt-server.herokuapp.com/users/login";

    axios
      .post(url, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log("res.data in login post request: ", res.data);

        // store the logged-in user's information
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("user_name", res.data.first_name);
        localStorage.setItem("user_id", res.data.id);

        // set logged-in cookie to true and display the user's dashboard
        document.cookie = "loggedIn=true;";
        window.location.replace("/dashboard");
      })
      .catch((error) => {
        console.log("Error Occurred:", error);
        alert("Login failed. Email and/or password are incorrect.");
      });
  };

  const loginOptions = {
    email: { required: "Email is required" },
    password: { required: "Password is required" },
  };

  const currentPath = window.location.pathname;

  return (
    <div className="login-window-container">
      <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
        <h1>Sign in</h1>
        <p>Enter your email and password below</p>
        <div className="input-group">
          <input
            type="email"
            id="inputID1"
            placeholder="Email*"
            className="email"
            name="email"
            {...register("email", loginOptions.email)}
          />
        </div>
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
        <br />
        <div className="input-group">
          <input
            type="password"
            id="inputID2"
            placeholder="Password*"
            className="password"
            name="password"
            {...register("password", loginOptions.password)}
          />
        </div>
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
        <h6>
          <em>*required</em>
        </h6>
        <br />
        <button type="submit" className="login">
          Log In
        </button>

        {currentPath === "/" ? (
          <Link
            className="link"
            to="/signup"
            onClick={() => {
              window.location.replace("/signup");
            }}
          >
            or Create an account!
          </Link>
        ) : (
          <Link
            className="link"
            to="/"
            onClick={() => {
              window.location.replace("/");
            }}
          >
            Sign In
          </Link>
        )}
      </form>
      <img
        style={{ objectFit: "fill" }}
        src={vector}
        className="vector"
        alt="decorative green shape"
      />
    </div>
  );
};

export default Login;
