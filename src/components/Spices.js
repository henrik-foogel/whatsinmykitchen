import React from 'react';
import GroceryDetailsContainer from './GroceryDetailsContainer';
import firebase from "../firebase-config";
import { Link, Redirect } from "react-router-dom";

const Spices = () => {
  if(firebase.auth().currentUser !== null) {
    return (
        <div className="spices details-container">
            <GroceryDetailsContainer where={'spices'} />
        </div>
    )
  } else {
    return (
        <Redirect to="/login"/>
    )
  }
}

export default Spices;