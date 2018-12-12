import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="login__page">
      <div className="login__header">
        <div className="login__header--wrapper">
          <div className="logo__login">
          <img src="image/logo__imagery.png" className="logo__login--image" alt="img__logo"/>
          </div>
          <div className="datas__login">
          <div className="datas__login--currency">
              <select className="currency__select">
                <option>dkk</option>
                <option>eur</option>
                <option>usd</option>
                <option>gbp</option>
                <option>ron</option>
              </select>              
          </div>
          <NavLink className="redirectLogin" to="/login">Login</NavLink>
          <NavLink className="redirectSignup" to="/signup">Register</NavLink>
          </div>
        </div>
      </div>
        <div className="login__page--wrapper">
          <form className="loginForm">
          <div className="login__logo--wrapper">
            <img src="image/logo__imagery.png" className="login__logo--wrapper--element" alt="img__logo"/>
          </div>
            <h2>Traveller</h2>
            <p>Signin using your Traveller account to access our services and have an overview of all the bookings and discover more information about the bookings</p>
            <div className="formGroupLogin">
              <label>Email address</label>
              <input type="text" className="emailAddress__login"/>
            </div>
            <div className="formGroupLogin">
              <label>Password</label>
              <input type="password" className="passwordValue__login"/>
            </div>
            <NavLink className="login__button" to="/home">Login</NavLink>
          </form>
        </div>
      </div>
    )
  }
}
export default Login;