import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';
import ManageOrder from './ManageOrder/ManageOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    console.log(orders);

    const handleCancelBookingButton = id => {
        const processed = window.confirm('Are you sure you want to delete?');
        if (processed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {                        
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                        alert('Deleted');
                    }
                });
        }
    }

    return (
        <div className="manage-all-orders py-5 container">
            <h1 className="text-center">Manage All Orders</h1>
            {
                orders?.map(order => <ManageOrder
                    key={order._id}
                    order={order}
                    handleCancelBookingButton={handleCancelBookingButton}
                >
                </ManageOrder>)
            }
        </div>
    );
};

export default ManageAllOrders;