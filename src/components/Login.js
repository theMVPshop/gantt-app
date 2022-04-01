import * as React from "react"
import { useState } from 'react';
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

import "./Login.css";


const Login = () => {
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])

  //These two lines are to test require attribute
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hey, you clicked login")
    console.log("and here's the username in handleLogin after clicking: ", username)
    //make a post call to our backend here:

  }
  const handleChange = (e) => {
    e.preventDefault();
    //store the input data in state
    //based on which input has data
    if (e.target.name === "username") {
      console.log("the input is username")
      setUsername(e.target.value)
      console.log("username after serUsername: ", username)
    } else if (e.target.name === "password") {
      console.log("entering a password")
      setPassword(e.target.value)
    }
  }
  return (
    <div className="login-window-container">
      <div className="login-window">
        <h1>Login</h1>
        <form className="login-form">
          <div className="input-group">
            <label for="username">Username:  </label>
            <input 
              type="text" 
              className="username" 
              name="username"
              onChange={handleChange}
              required>
            </input>
          </div>
          <br/>
          <div className="input-group">
            <label for="password">Password: </label>
            <input 
              type="password" 
              className="password" 
              name="password"
              onChange={handleChange}
              >
            </input>
          </div>
          <br/>
          <button
            type="submit"
            onClick={(e)=> handleLogin(e)}
          >Log In</button>
          <Link to="/dashboard">Dashboard</Link>
        </form>
      </div>

    {/* This is code to try to create a required field */}
      <div className="App">
        THIS IS A PRACTICE FORM
        <form>
          <input name="requiredField" />
        </form>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input name="requiredField" ref={register({ required: true })} />
          <br />
          {errors.requiredField && <span>This field is required</span>}
          <br />
          <input type="submit" />
        </form> */}
      </div>
    </div>
  )
}

export default Login