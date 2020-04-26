import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import "./App.css";
import store from "./pages/store/store";

export default function App(props) {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" component={Signup} exact />
        <Route path="/Home" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Provider>
  );
}
