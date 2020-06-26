import React from 'react';
import GroceryDetailsContainer from './GroceryDetailsContainer';

const Fridge = () => {
    return (
        <div className="fridge details-container">
            <GroceryDetailsContainer where={'fridge'} />
        </div>
    )
}

export default Fridge;