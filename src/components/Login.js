import React, { useContext, useState } from 'react';
import SignInRegister from './SignInRegister';
import firebase from "../firebase-config";
import { Link, useHistory } from "react-router-dom";

const Login = (props) => {
    const [loginInOrRegister, setloginInOrRegister] = useState('')
    const history = useHistory();

    const handleState = () => {
        if(loginInOrRegister === '') {
            setloginInOrRegister('register')
        } else {
            setloginInOrRegister('')
        }
    }
    const handleLoginRegistration = async (name, email, password, rePassword) => {
        if(loginInOrRegister === 'register') {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                history.push('/');
            } catch(error) {
                alert(error.message)
            }
        } else {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
                history.push('/');
            } catch(error) {
                alert(error.message)
            }
        }
    }
    return (
        <div className="login-container">
            <div className="login-container__inner">
                <SignInRegister state={loginInOrRegister} handle={handleLoginRegistration}/>
                <div className="register-sign-in-button-container">Do you want to <span onClick={handleState}>sign in</span> or <span onClick={handleState}>register</span>?</div>
            </div>
        </div>
    )
}

export default Login;