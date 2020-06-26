import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import GroceryForm from './GroceryForm';
import ToBuyForm from './ToBuyForm';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Home</h1>
                <GroceryForm/>
                <ToBuyForm />
            </div>
    )
}

export default Home;