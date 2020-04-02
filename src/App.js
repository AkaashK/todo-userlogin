import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import login from './pages/login'
import './App.css';


export default function App() {
  return (
    <Switch>
      <Route path='/' component={login} exact />
      <Route path="/Home" component={Home} />
    </Switch>
  )
}
