import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];

const ProductDetail = () => {
    const { id } = useParams();

    //display the product details by finding the product with the given id

    const product = products.find((product) => product.id === parseInt(id));

    return (
        <div>
            <h2>Product Detail</h2>
            <p>Product ID: {product.name}</p>
            <p>Product price: {product.price}</p>
            {/* Add your product details here */}
        </div>
    );
};

export default ProductDetail;
