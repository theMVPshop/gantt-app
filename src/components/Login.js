import * as React from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

import "./Login.css";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  

  const handleLogin = (data) => {
    console.log("hey, you clicked login")

    //GET RID OF THIS CONSOLE LOG. IT SAVES PASSWORD DATA
    console.log("these data were passed into handleLogin(): ", data)

    //make a post call to our backend here:

  }

  const handleError = (errors) => {};

  const loginOptions = {
    username: { required: "Username is required" },
    password: { required: "Password is required"}
  }

  return (
    <div className="login-window-container">
      <div className="login-window">
        <h1>Login</h1>
        <form 
          className="login-form"
          onSubmit={handleSubmit(handleLogin)}
          >
          <div className="input-group">
            <label for="username">Username:  </label>
            <input 
              type="text" 
              className="username" 
              name="username"
              {...register('username', loginOptions.username )}
            />
          </div>
            <small className="text-danger">
                  {errors?.username && errors.username.message}
            </small>
          <br/>
          <div className="input-group">
            <label for="password">Password: </label>
            <input 
              type="password" 
              className="password" 
              name="password"
              {...register('password', loginOptions.password )}
            />
          </div>
          <small className="text-danger">
                  {errors?.password && errors.password.message}
            </small>
          <br/>
          <button
            type="submit"
          >Log In</button>
          <Link to="/dashboard">Dashboard</Link>
        </form>
      </div>
    </div>
  )
}

export default Login