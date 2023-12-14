import React, { useEffect } from 'react';
import { useParams,useLocation } from 'react-router-dom';

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];

const ProductDetail = () => {

    // const { id } = useParams();

    const params = useParams();

    const { id } = params;

    const product = products.find((product) => product.id === parseInt(id));    

    const location = useLocation();// query parameters.
    console.log("Location: ",location);

    const queryParams = new URLSearchParams(location.search);
    console.log("Query Params: ",queryParams);

    const price = queryParams.get('price');
    console.log("Price: ",price);

    return (
        <div>
            <h1>Product Detail</h1>
            {/* Add your product details here */}
            {/* display product id name and price */}
            <h1>Product Id: {product.id} </h1>
            <h1>Product Name:{product.name} </h1>
            <h1>Product Price: {price}</h1>

        </div>
    );
};

export default ProductDetail;
