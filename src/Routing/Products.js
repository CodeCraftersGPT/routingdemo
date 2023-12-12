import React from 'react';
import { Link } from 'react-router-dom';
// import useNavigate hook
import { useNavigate } from 'react-router-dom';

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];

const Product = () => {

    // define function to navigate to the orders
    const navigate = useNavigate();



    const navigateToOrders = () => {
        // navigate to the orders
        // use react-router-dom navigate function to navigate to the orders
        // use the navigate function from useNavigate hook
        // import useNavigate hook
        // import { useNavigate } from 'react-router-dom';
        // use the hook
        // const navigate = useNavigate();
        // call the navigate function
        // navigate('/orders');

        navigate('/orders');

    }

    return (
        <div>
            <h2>Products</h2>
            {/* define button to navigate to the orders */}
            <button onClick={navigateToOrders}>Orders</button>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                         <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Product;
