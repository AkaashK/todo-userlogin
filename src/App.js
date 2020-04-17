import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { Provider } from 'react-redux'
import './App.css';
import store from './pages/store/store'
import { connect } from 'react-redux'

export default function App(props) {
  return (
    <Provider store={store}>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path="/Home" component={Home} disabled={!props.isloggedin} />
      </Switch>
    </Provider>
  )
}

const mapStateToProps = state => {
  return {
    isloggedin: state[state.length -1].isloggedin
  }
}

connect(mapStateToProps)(App)
