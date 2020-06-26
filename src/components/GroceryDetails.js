import React, { useContext } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';
import ShowImage from './ShowImage'

const GroceryDetails = ({grocery}) => {
    const {dispatch} = useContext(GroceryContext)
    return (
        // <li onClick={() => dispatch({type: 'REMOVE_GROCERY', id: grocery.id})}>
        <li>
            <ShowImage image={grocery.image} where={grocery.where} />
            <div className="name">{grocery.name}</div>
            <div className="type">{grocery.quantity}</div>
            <div className="buy date">{grocery.buyDate.toString().slice(0, 10)}</div>
            <div className="ex-date">{grocery.exDate.toString().slice(0, 10)}</div>
            <div className="button" onClick={() => dispatch({type: 'REMOVE_GROCERY', id: grocery.id})}>Delete</div>
        </li>
    )
}

export default GroceryDetails;