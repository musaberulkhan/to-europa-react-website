import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);


    return (
        <div className="myOrders container py-5">
            <h1 className="text-center">My Orders</h1>           
            {
                orders?.map(order => <MyOrder
                    key={order._id}
                    order={order}
                >
                </MyOrder>)
            }
        </div>
    );
};

export default MyOrders;