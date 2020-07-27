import React from 'react';
import GroceryDetailsContainer from './GroceryDetailsContainer';
import firebase from "../firebase-config";
import { Link, Redirect } from "react-router-dom";

const Fridge = () => {
  if(firebase.auth().currentUser !== null) {
    return (
        <div className="fridge details-container">
            <GroceryDetailsContainer where={'fridge'} />
        </div>
    )
  } else {
    return (
        <Redirect to="/login"/>
    )
  }
}

export default Fridge;