import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import login from './pages/login'
import './App.css';


export default function App() {
  return (
    <Router>
      <Route path="/" component={login} exact />
      <Route path="/Home" component={Home} exact/>
    </Router>
  )
}
