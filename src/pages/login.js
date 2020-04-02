import React from 'react';
import logo from '../logo.svg'
import '../App.css'
import History from './history'


function login() {
    const user = [{
        email: 'hello@example.com',
        password: '123456',
    }]

    function UserLogin() {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        if (email === '' && password === '') {
            alert('Please enter all the fields')
        } else {
            let newUser = [...user]
            let isValiduser = newUser.find((user) => password === user.password && email === user.email)

            if (isValiduser) {
                console.log('just in')
                History.push('/Home')
            } else {
                document.getElementById('email').value = ''
                document.getElementById('password').value = ''
                alert('No user')
            }
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
export default login;
