import React, { useEffect } from "react"

import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

// import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const handleSignup = (data) => {
    console.log("hey, you entered this email: ", data.email)
  
    
    //SAVE URL HERE:
    //make a post call to our backend here:

  
    //axios post call including email, password, confirmPassword
    axios.post("http://localhost:4000/users/", {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      confirm_password: data.confirmPassword
    })
    .then((res)=> {
      console.log("res.data in signup post request: ", res)
      //check return message
      //if return message says passwords don't match
      //render that message to the user
      //else render login page? or message confirming registration, then login page?

      
      //-------------from Pamela's capstone for reference:-----------
      //set isSignedIn to true so components rendered on login will render
      // setIsSignedIn(true)
      // //set token so other axios calls can use it to access data
      // setToken(res.data.accessToken)
      // // set userId so correct data are gathered in axios calls
      // setUserId(res.data.userId)
      //-------------------------end sample for reference ------------
    }).catch((error) => {
      console.log("Error Occurred:", error)

      alert("Signup Failed")
    })

    
  }

  const handleError = (errors) => {};

  const loginOptions = {
    firstName: { required: "First name is required" },
    lastName: { required: "Last name is required" },
    email: { required: "Email is required" },
    password: { required: "Password is required" },
    confirmPassword: { required: "Password confirmation is required" },
  };

  return (
    <div>
      <div className="login-window">
        <h1>Sign Up</h1>
        <form 
          className="login-form"
          onSubmit={handleSubmit(handleSignup)}
          >

          <div className="input-group">
            <label for="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              {...register("firstName", loginOptions.firstName)}
            />
          </div>
          <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
          <br />

          <div className="input-group">
            <label for="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              {...register("lastName", loginOptions.lastName)}
            />
          </div>
          <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
          <br />

          <div className="input-group">
            <label for="email">Email: </label>
            <input
              type="email"
              name="email"
              {...register("email", loginOptions.email)}
            />
          </div>
          <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
          <br />

          <div className="input-group">
            <label for="password">Password: </label>
            <input
              type="password"
              name="password"
              {...register("password", loginOptions.password)}
            />
          </div>
          <small className="text-danger">
            {errors?.password && errors.password.message}
          </small>
          <br />

          <div className="input-group">
            <label for="password">Confirm Password: </label>
            <input
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", loginOptions.consfirmPassword)}
            />
          </div>
          <small className="text-danger">
            {errors?.password && errors.password.message}
          </small>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
