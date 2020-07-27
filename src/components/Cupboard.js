import React from 'react';
import GroceryDetailsContainer from './GroceryDetailsContainer';
import { Link, Redirect } from "react-router-dom";
import firebase from "../firebase-config";

const Cupboard = () => {
  if(firebase.auth().currentUser !== null) {
    return (
        <div className="cupboard details-container">
            <GroceryDetailsContainer where={'cupboard'}/>
        </div>
    ) 
    } else {
    return (
        <Redirect to="/login"/>
    )
  }
}

export default Cupboard;