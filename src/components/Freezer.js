import React, { useContext } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';
import GroceryDetails from './GroceryDetails';

const Freezer = () => {
    const { groceries } = useContext(GroceryContext)
    return groceries.length ? (
        <div className="freezer list-container">
            <ul>
                {groceries.map(grocery => {
                    if(grocery.where === 'freezer')
                    return (<GroceryDetails grocery={grocery} key={grocery.id} />)
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">Nothing to eat. You will starve!</div>
    )
}

export default Freezer;