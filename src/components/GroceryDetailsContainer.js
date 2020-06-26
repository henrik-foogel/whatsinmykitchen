import React, { useContext } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';
import GroceryDetails from './GroceryDetails';

const GroceryDetailsContainer = ({ where }) => {
    const { groceries } = useContext(GroceryContext)

    return groceries.length ? (
        <div className="list-container">
            <ul className="list-names">
                <li>Image</li>
                <li>Item</li>
                <li>Amount</li>
                <li>Buy Date</li>
                <li>Experation Date</li>
            </ul>
            <ul className="list-items">
                {groceries.map(grocery => {
                    if (grocery.where === where)
                        return (<GroceryDetails grocery={grocery} key={grocery.id} />)
                })}
            </ul>
        </div>
    ) : (
            <div className="empty">Nothing to eat. You will starve!</div>
        )
};

export default GroceryDetailsContainer