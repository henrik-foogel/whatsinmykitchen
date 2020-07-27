import React from 'react';
import GroceryDetailsContainer from './GroceryDetailsContainer';
import firebase from "../firebase-config";
import { Link, Redirect } from "react-router-dom";

const Freezer = () => {
  if(firebase.auth().currentUser !== null) {
    return (
        <div className="freezer details-container">
            <GroceryDetailsContainer where={'freezer'}/>
        </div>
    )
  } else {
    return (
        <Redirect to="/login"/>
    )
  }
}

export default Freezer;