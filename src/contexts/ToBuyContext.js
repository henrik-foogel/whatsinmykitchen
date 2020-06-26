import React, { createContext, useReducer, useEffect } from 'react';
import { toBuyReducer } from '../reducers/toBuyReducer';


export const ToBuyContext = createContext();

const ToBuyContextProvider = (props) => {
    const [dispatch] = useReducer(toBuyReducer, [], () => {
        
    });
}

export default ToBuyContextProvider;