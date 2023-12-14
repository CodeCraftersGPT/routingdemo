import React from 'react';
import { Link } from 'react-router-dom';

// define array of cars and display them in a list

const cars = [
    { id: 1, name: 'Car 1', price: 10 },
    { id: 2, name: 'Car 2', price: 20 },
    { id: 3, name: 'Car 3', price: 30 },
];


const NewProducts = () => {
    return (
        <div>
            <h2>New Products</h2>
            {/* Add your featured products here */}

            <ul>
                {cars.map((car) => (
                    <li key={car.id}>
                        <Link to={`/product/${car.id}?price=${car.price}`}> {car.name} - {car.price}</Link>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default NewProducts;
