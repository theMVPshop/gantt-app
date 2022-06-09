import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./Signup.css";
import vector from "../../images/Vectors.svg";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = (data) => {
    const url = "https://gantt-server.herokuapp.com/users/";

    axios
      .post(url, {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
        confirm_password: data.confirmPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Success! Please sign in.");
          window.location.replace("/");
        };
      })
      .catch((error) => {
        console.log("Error Occurred:", error);
        alert("Signup Failed. Please try again.");
      });
  };

  const loginOptions = {
    firstName: { required: "First name is required" },
    lastName: { required: "Last name is required" },
    email: { required: "Email is required" },
    password: { required: "Password is required" },
    confirmPassword: { required: "Password confirmation is required" },
  };

  const currentPath = window.location.pathname;

  return (
    <div className="sign-up-container">
      <div className="signUp-window">
        <h1 className="signIn-text">Sign Up</h1>
        <p>Create your free account!</p>
        <form className="signUp-form" onSubmit={handleSubmit(handleSignup)}>
          <div className="names">
            <div className="input-group">
              <input
                className="signUp-input"
                type="text"
                id="firt-name"
                placeholder="First Name"
                name="firstName"
                {...register("firstName", loginOptions.firstName)}
              />
            </div>
            <small className="text-danger">
              {errors?.firstName && errors.firstName.message}
            </small>
            <br />

            <div className="input-group">
              <input
                className="signUp-input"
                type="text"
                id="last-name"
                placeholder="Last Name"
                name="lastName"
                {...register("lastName", loginOptions.lastName)}
              />
            </div>
            <small className="text-danger">
              {errors?.lastName && errors.lastName.message}
            </small>
            <br />
          </div>

          <div className="input-group">
            <input
              className="signUp-input"
              type="email"
              placeholder="Email"
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
              className="signUp-input"
              type="password"
              placeholder="Password"
              name="password"
              {...register("password", loginOptions.password)}
            />
          </div>
          <small className="text-danger">
            {errors?.password && errors.password.message}
          </small>
          <br />

          <div className="input-group">
            <input
              className="signUp-input"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              {...register("confirmPassword", loginOptions.confirmPassword)}
            />
          </div>
          <small className="text-danger">
            {errors?.confirmPassword && errors.confirmPassword.message}
          </small>
          <br />
          <button className="login" type="submit">
            Sign Up
          </button>

          {currentPath === "/" ? (
            <Link
              className="link"
              to="/signup"
              onClick={() => {
                window.location.replace("/signup");
              }}
            >
              Sign Up
            </Link>
          ) : (
            <Link
              className="link"
              to="/"
              onClick={() => {
                window.location.replace("/");
              }}
            >
              Already have an account? Sign in!
            </Link>
          )}
        </form>
      </div>
      <img
        style={{ objectFit: "fill" }}
        src={vector}
        alt="green_hills_bottom_border"
        className="vector"
      ></img>
    </div>
  );
};

export default Signup;
