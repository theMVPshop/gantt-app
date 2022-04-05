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
    console.log("data.email: ", data.email)
    //make a post call to our backend here:

    //SAVE URL HERE:

    
    //axios post call including email and password
    //to be checked by backend and return token
    axios.post(url + `/login`, {
      email: data.email,
      password: data.password
    })
    .then((res)=> {
      console.log("res.data in login post request: ", res.data)
      //-------------from Pamela's capstone for reference:-----------
      //set isSignedIn to true so components rendered on login will render
      // setIsSignedIn(true)
      // //set token so other axios calls can use it to access data
      // setToken(res.data.accessToken)
      // // set userId so correct data are gathered in axios calls
      // setUserId(res.data.userId)
      //-------------------------end sample for reference ------------
    })
  }

  }

  const handleError = (errors) => {};

  const loginOptions = {
    email: { required: "Email is required" },
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
            <label for="email">Email:  </label>
            <input 
              type="email" 
              className="email" 
              name="email"
              {...register('email', loginOptions.email )}
            />
          </div>
            <small className="text-danger">
                  {errors?.email && errors.email.message}
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