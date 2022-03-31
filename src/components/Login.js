import * as React from "react"
import { Link } from "react-router-dom"

import "./Login.css";


const Login = () => {

  return (
    <div className="login-window-container">
      <div className="login-window">
        <h1>Login</h1>
        <form className="login-form">
          <div className="input-group">
            <label for="username">Username:  </label>
            <input type="text" className="username" name="username"></input>
          </div>
          <br/>
          <div className="input-group">
            <label for="password">Password: </label>
            <input type="password" className="password" name="password"></input>
          </div>
          <br/>
          
          <Link to="/dashboard">Dashboard</Link>
        </form>
      </div>
    </div>
  )
}

export default Login