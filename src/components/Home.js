import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import GroceryForm from './GroceryForm';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Home</h1>
                <GroceryForm/>
            </div>
    )
}

export default Home;