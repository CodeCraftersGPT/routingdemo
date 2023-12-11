import React from 'react';

const Orders = () => {
    const orders = [
        { id: 1, name: 'Order 1' },
        { id: 2, name: 'Order 2' },
        { id: 3, name: 'Order 3' },
    ];

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>{order.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
