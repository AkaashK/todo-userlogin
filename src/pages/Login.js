import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import History from "./history";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'

export function Login({emailState, passwordState}) {
  const [user, setUser] = useState({ email: "", password: "" });

  const { email, password } = user;

  function signin() {
    if (email === emailState && password === passwordState) {
      History.push("/Home");
    } else if (email === "" || password === "") {
      document.getElementById("alert").innerHTML = "please enter all fields";
    } else {
      document.getElementById("alert").innerHTML =
        "please signup and continue login";
      return <Redirect to="/" />;
    }
  }

  const handleChange = (name) => (event) => {
    document.getElementById("alert").innerHTML = "";
    setUser({ ...user, [name]: event.target.value });
  };

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt=""></img>
      <h2 className="title">SIGN IN</h2>
      <p id="alert" data-testid="alertmsglogin"></p>
      email
      <input
        id="email"
        data-testid="emailtestlogin"
        type="text"
        value={email}
        onChange={handleChange("email")}
        required
      />{" "}
      <br />
      password
      <input
        id="password"
        data-testid="passtestlogin"
        type="password"
        value={password}
        onChange={handleChange("password")}
        required
      />{" "}
      <br />
      <button
        data-testid="buttonlogin"
        id="loginbtn"
        className="btn"
        type="button"
        onClick={signin}
      >
        signin
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    emailState: state[state.length - 1].email,
    passwordState: state[state.length - 1].password
  };
};

export default connect(mapStateToProps)(Login)
