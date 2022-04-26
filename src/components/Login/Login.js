import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./Login.css";
import { ReactComponent as Vector } from "../../images/Vectors.svg";
import background from "./Vectors.svg"
import vector from "../../images/Vectors.svg"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log("hey, you clicked login");
    //make a post call to our backend here:

    //SAVE URL HERE:

    //axios post call including email and password
    axios
      .post("http://localhost:4000/users/login", {
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

  // const handleError = (errors) => {};

  const loginOptions = {
    email: { required: "Email is required" },
    password: { required: "Password is required" },
  };

  return (
    <div className="login-window-container">
  
      <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
        <h1>Sign in</h1>
        <p>Enter your email and password below</p>
        <div className="input-group">
          <input
            type="email"
            id="inputID1"
            placeholder="Email"
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
            placeholder="Password"
            className="password"
            name="password"
            {...register("password", loginOptions.password)}
          />
        </div>
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
        <br />
        <button type="submit" className="login">
          Log In
        </button>
        <Link to="/dashboard">Dashboard</Link>
      </form>
      {/* <div style={{ backgroundImage: `url(${background})` }}className="vector-cont"> */}

        <img style={{ objectFit: "fill"}} src={vector} className="vector"></img>
        {/* <Vector style={{ objectFit: "fill"}} className="vector" /> */}

    </div>
  );
};

export default Login;
