
import './routing_styles.css';

import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {

    const appliedClassName = ({isPending,isActive}) => {
        return isPending ? 'pending' : isActive ? 'noUnderScore' : '';
        
    }

    return (
        <div>
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/about" className={appliedClassName}>About</NavLink></li>
                <li><NavLink to="/orders" className={appliedClassName}>Orders</NavLink></li>
                <li><NavLink to="/products" className={appliedClassName}>Products</NavLink></li>
            </ul>
        </div>
    );
}

export default Navigation;
