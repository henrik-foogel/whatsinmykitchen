import React, { createContext, useReducer, useEffect } from 'react';
import { groceryReducer } from '../reducers/groceryReducer';

export const GroceryContext = createContext();

const GroceryContextProvider = (props) => {

    const [groceries, dispatch] = useReducer(groceryReducer, [], () => {
        const localData = localStorage.getItem('groceries');
        
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('groceries', JSON.stringify(groceries))
    }, [groceries])

    return (
        <GroceryContext.Provider value={{ groceries, dispatch }}>
            {props.children}
        </GroceryContext.Provider>
    )
}

export default GroceryContextProvider;