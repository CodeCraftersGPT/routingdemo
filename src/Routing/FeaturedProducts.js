import React from 'react';
import { Link } from 'react-router-dom';
// define array of bikes and display them in a list

const bikes = [
    { id: 1, name: 'Bike 1', price: 10 },
    { id: 2, name: 'Bike 2', price: 20 },
    { id: 3, name: 'Bike 3', price: 30 },
];  


const FeaturedProducts = () => {
    return (
        <div>
            <h2>Featured Products</h2>
            {/* Add your featured products here */}
            <ul>
                {bikes.map((bike) => (
                    <li key={bike.id}>
                        <Link to={`/product/${bike.id}?price=${bike.price}`}> {bike.name} - {bike.price}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeaturedProducts;
