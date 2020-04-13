import React, { useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    // const { isLightTheme, light, dark } = useContext(ThemeContext);
    // const theme = isLightTheme ? light : dark;

    return (
        <nav className='navbar'>
            <h1>What's in my kitchen?</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cupboard">Cupboard</NavLink></li>
                <li><NavLink to="/fridge">Fridge</NavLink></li>
                <li><NavLink to="/freezer">Freezer</NavLink></li>
                <li><NavLink to="/spices">Spices</NavLink></li>
            </ul>
        </nav>
    );
}

export default withRouter(Navbar);