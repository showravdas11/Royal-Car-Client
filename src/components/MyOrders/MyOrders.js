import React, { useEffect, useState } from 'react';
import MySingleOrder from '../MySingleOrder/MySingleOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([])

    const deleteOrder = (id) => {
        const remaining = orders.filter(
            order => order._id !== id)
        console.log(remaining)
        setOrders(remaining)
    }

    useEffect(() => {
        fetch('https://secure-cove-15905.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="container product-bg mt-5">
            <h3 className="text-center">My Order</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    orders.map(order => <MySingleOrder
                        key={order.name}
                        order={order}
                        deleteOrder={deleteOrder}
                    >

                    </MySingleOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;