import * as React from "react"
import { useState } from 'react';
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

import "./Login.css";


const Login = () => {
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])

  //These two lines are to test require attribute
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

  //EXAMPLE:
  // const RegisterForm = () => {
  //   const { register, handleSubmit, formState: { errors } } = useForm();
  //   const handleRegistration = (data) => console.log(data);
  //   const handleError = (errors) => {};

    // const registerOptions = {
    //   name: { required: "Name is required" },
    //   email: { required: "Email is required" },
    //   password: {
    //     required: "Password is required",
    //     minLength: {
    //       value: 8,
    //       message: "Password must have at least 8 characters"
    //     }
    //   }
    // };
  
    // return (
    //   <form onSubmit={handleSubmit(handleRegistration, handleError)}>
    //     <div>
    //       <label>Name</label>
    //       <input name="name" type="text" {...register('name', registerOptions.name) }/>
    //       <small className="text-danger">
    //         {errors?.name && errors.name.message}
    //       </small>
    //     </div>
    //     <div>
    //       <label>Email</label>
    //       <input
    //         type="email"
    //         name="email"
    //         {...register('email', registerOptions.email)}
    //       />
    //       <small className="text-danger">
    //         {errors?.email && errors.email.message}
    //       </small>
    //     </div>
    //     <div>
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         name="password"
    //         {...register('password', registerOptions.password)}
    //       />
    //       <small className="text-danger">
    //         {errors?.password && errors.password.message}
    //       </small>
    //     </div>
    //     <button>Submit</button>
    //   </form>
 
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