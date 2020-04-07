import React from 'react';
import logo from '../logo.svg'
import '../App.css'
import History from './history'
import store from './store/store'
import AddUser from '../pages/store/actions'


function login() {

    function UserLogin() {
        console.log('gettin in')
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        if (email === '' && password === '') {
            alert('Please enter all the fields')
        } else {
            store.dispatch(AddUser({email, password}))
            History.push('/Home')
        } 
    }

    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt=""></img>
            <h2 className="title">LOGIN</h2>
            email<input id="email" type="text" required /> <br />
            password<input id="password" type="password" required /> <br />
            <button className="btn" type="button" onClick={UserLogin}>
                login
            </button>
        </div>
    )
}

export default login

