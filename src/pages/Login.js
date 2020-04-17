import React,{useState} from "react";
import logo from "../logo.svg";
import "../App.css";
import History from "./history";
import store from "./store/store";
import AddUser from "./store/actions";

function Login() {
  const [user, setUser] = useState({email: '', password: ''})
  const [value, setvalue] = useState(false)
  
  const fn = () => {
    console.log('hey')
  }

  
  function userLogin() {
    console.log("gettin in");
    const email = user.email
    const password = user.password

    if (email === "" && password === "") {
      alert("Please enter all the fields");
    } else {
      store.dispatch(AddUser({ email, password }));
      History.push("/Home");
    }
  }

  function handleEmailChange(e) {
    setUser({
      email: e.target.value
    })
  }

  function handlePasswordChange(e) {
    setUser({
      password: e.target.value
    })
  }

  return (

    <div className="App-header">

    {value && <span data-testid='span'>
      test passed
    </span>}
      <img src={logo} className="App-logo" alt=""></img>
      <h2 className="title">LOGIN</h2>
      email
      <input id="email" type="text" value={user.email} onChange={handleEmailChange} required /> <br />
      password
      <input id="password" type="password" value={user.password} onChange={handlePasswordChange} required /> <br />
      <button data-testid='button' id="loginbtn" className="btn" type="submit" onClick={() => setvalue(true)}>
        login
      </button>
    </div>
  );
}

export default Login;
