import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import login from './pages/login'
import { Provider } from 'react-redux'
import './App.css';
import store from './pages/store/store'

export default function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path='/' component={login} exact />
        <Route path="/Home" component={Home} />
      </Switch>
    </Provider>
  )
}
