import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import History from "./history";
import store from "./store/store";
import AddUser from "./store/actions";

function SignUp() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const { email, password, name } = user;

  function signup() {
    if (name === "" || email === "" || password === "") {
      document.getElementById("alert").innerHTML = "please enter all fields";
    } else {
      store.dispatch(AddUser({ name, email, password }));
      History.push("/login");
    }
  }

  const handleChange = (name) => (event) => {
    document.getElementById("alert").innerHTML = "";
    setUser({ ...user, [name]: event.target.value });
  };

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt=""></img>
      <h2 className="title">SIGN UP</h2>
      <p id="alert" data-testid="alertmsg"></p>
      Name
      <input
        id="name"
        data-testid="nameTest"
        type="text"
        value={name}
        onChange={handleChange("name")}
        required
      />{" "}
      <br />
      email
      <input
        id="email"
        data-testid="emailTest"
        type="text"
        value={email}
        onChange={handleChange("email")}
        required
      />{" "}
      <br />
      password
      <input
        id="password"
        data-testid="passTest"
        type="password"
        value={password}
        onChange={handleChange("password")}
        required
      />{" "}
      <br />
      <button
        data-testid="button"
        id="loginbtn"
        className="btn"
        type="button"
        onClick={signup}
      >
        signup
      </button>
    </div>
  );
}

export default SignUp;
