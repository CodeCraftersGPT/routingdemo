import React from 'react';
// import useNavigate from 'react-router-dom';
import { Link, useNavigate,useLocation, Outlet } from 'react-router-dom';


const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];

const Product = () => {

    const navigate = useNavigate();
   

    const navigateToOrders = () => {
        navigate('/orders');
        console.log("Navigate to orders");  
        // Navigate to Orders Page
    };

    return (
        <div>
            <h2>Products</h2>
            <div>
                <ul>
                    <li>
                        <Link to="/product/featuredproducts">featured products</Link>
                    </li>
                    <li>
                        <Link to="/product/newproducts">new products</Link>
                    </li>
                   
                </ul>
            </div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}?price=${product.price}`}> {product.name} - {product.price}</Link>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={navigateToOrders}>Navigate To Orders</button>
            </div>
            <div>
               <Outlet />
                </div>
        </div>
    );
};

export default Product;
