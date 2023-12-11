
import './routing_styles.css';

import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {

    const appliedClass = ({isActive,isPending}) =>
    {
       return  isPending ? "isPending" : isActive ? "active" : ""
    }


    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about" className={appliedClass}>About</NavLink></li>
                <li><NavLink to="/product" className={appliedClass}>Product</NavLink></li>
                <li><NavLink to="/orders" className={appliedClass}>Orders</NavLink></li>
                

            </ul>
        </div>
    );
}

export default Navigation;
