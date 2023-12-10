// define Navigation Component. with Link to Home and Navlink to about page

import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    );
}

export default Navigation;
