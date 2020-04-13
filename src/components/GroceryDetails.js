import React, { useContext } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';

const GroceryDetails = ({grocery}) => {
    const {dispatch} = useContext(GroceryContext)
    console.log(grocery)
    return (
        <li onClick={() => dispatch({type: 'REMOVE_GROCERY', id: grocery.id})}>
            <div className="name">{grocery.name}</div>
            <div className="type">{grocery.quantity}</div>
            <div className="buy date">{grocery.buyDate.toString().slice(0, 10)}</div>
            <div className="ex-date">{grocery.exDate.toString().slice(0, 10)}</div>
        </li>
    )
}

export default GroceryDetails;