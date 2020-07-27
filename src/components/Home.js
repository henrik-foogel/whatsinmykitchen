import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import GroceryForm from './GroceryForm';
import ToBuyForm from './ToBuyForm';
import firebase from "../firebase-config";
import { Link, Redirect } from "react-router-dom";

const Home = () => {
  if(firebase.auth().currentUser !== null) {
    return (
        <div className="home-container">
            <h1>Home</h1>
                <GroceryForm/>
                <ToBuyForm />
            </div>
    )
  } else {
    return (
        <Redirect to="/login"/>
    )
  }
}

export default Home;