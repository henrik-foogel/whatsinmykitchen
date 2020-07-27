import React, { useContext, useState, useEffect } from 'react'

const Login = ({state, handle}) => {
	const [name, setName] = useState('Hank')
    const [password, setPassword] = useState('testing')
    const [email, setEmail] = useState('hank@hank.se')
    const [rePassword, setRePassword] = useState('testing')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state === 'register') {
            if(password === rePassword) {
                handle(name, email, password, rePassword);
            } else {
                console.log('banana')
            }
        } else {
            handle(name, email, password, rePassword);
        }
    }

    const checkInputs = () => {
        if(email !== '') {
            setEmail('')
        }
        if(password !== '') {
            setPassword('')
        }
        if(rePassword !== '') {
            setRePassword('')
        }
    }

    if(state === 'register') {
        return (
            <form className="sign-in-container" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text" placeholder="name" onChange={(e) => {setName(e.target.value)}} value={name} required />
                <input type="email" placeholder="e-mail" onChange={(e) => {setEmail(e.target.value)}} value={email} required />
                <input type="password" placeholder="password" onChange={(e) => {setPassword(e.target.value)}} value={password} required/>
                <input type="password" placeholder="re-enter password" onChange={(e) => {setRePassword(e.target.value)}} value={rePassword} required/>
                <input className="button" type="submit" value="Sign in" />
            </form>
        )
    } else {
        return (
            <form className="register-container" onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <input type="email" placeholder="e-mail" onChange={(e) => {setEmail(e.target.value)}} value={email} required />
                <input type="password" placeholder="password" onChange={(e) => {setPassword(e.target.value)}} value={password} required/>
                <input className="button" type="submit" value="Sign in" />
            </form>
        )
    }
}

export default Login;