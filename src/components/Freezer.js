import React from 'react';
import GroceryDetailsContainer from './GroceryDetailsContainer';

const Freezer = () => {
    return (
        <div className="freezer details-container">
            <GroceryDetailsContainer where={'freezer'}/>
        </div>
    )
}

export default Freezer;