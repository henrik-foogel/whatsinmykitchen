import React, { useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import firebase from "../firebase-config";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
    const history = useHistory();
    const handleLogout = async () => {
        try {
            await firebase.auth().signOut()
            history.push('/login');
        } catch(error) {
            alert(error.message)
        }
    }
    if(firebase.auth().currentUser === null) {
    return (
        <nav className='navbar'>
            <NavLink to="/login"><img src={require("../images/login.png")}/></NavLink>
            <h1>What's in my kitchen?</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cupboard">Cupboard</NavLink></li>
                <li><NavLink to="/fridge">Fridge</NavLink></li>
                <li><NavLink to="/freezer">Freezer</NavLink></li>
                <li><NavLink to="/spices">Spices</NavLink></li>
            </ul>
        </nav>
    );
    } else {
        return (
        <nav className='navbar'>
            <NavLink to="/login"><img src={require("../images/loggedin.png")} onClick={handleLogout}/></NavLink>
            <h1>What's in my kitchen?</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cupboard">Cupboard</NavLink></li>
                <li><NavLink to="/fridge">Fridge</NavLink></li>
                <li><NavLink to="/freezer">Freezer</NavLink></li>
                <li><NavLink to="/spices">Spices</NavLink></li>
            </ul>
        </nav>
    );
    }
}

export default withRouter(Navbar);