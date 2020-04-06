import React from 'react';
import logo from '../logo.svg'
import '../App.css'
import History from './history'
import { connect } from 'react-redux'
import AddUser from '../pages/store/actions'


function login({ dispatch }, props) {

    function UserLogin() {
        console.log('gettin in')
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        console.log(email, " and ", password)

        if (email === '' && password === '') {
            alert('Please enter all the fields')
        } else {
            dispatch(AddUser(email, password))
            console.log(dispatch(AddUser(email, password)))
            console.log(props.displayState)
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

const mapStateToProps = state => {
    return {
        displayState: state.map((user) => user.email)
    }
}

export default connect(mapStateToProps)(login)

