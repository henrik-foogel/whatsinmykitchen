import React from 'react';
import GroceryDetailsContainer from './GroceryDetailsContainer';

const Cupboard = () => {
    return (
        <div className="cupboard details-container">
            <GroceryDetailsContainer where={'cupboard'}/>
        </div>
    )
}

export default Cupboard;