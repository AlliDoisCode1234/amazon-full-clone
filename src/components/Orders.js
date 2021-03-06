import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import { UseStateValue } from '../StateProvider';
import Order from './Order';
import './Orders.css'


const Orders = () => {
        const [{ basket, user }, dispatch] = UseStateValue();
        const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db
             .collection('users')
             .doc(user?.uid)
             .collection('orders')
             .orderBy('created', 'desc')
             .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
        
    }, [user])
        return (
            <div className='orders'>
                <h1>Your Orders</h1>

                <div className='orders__order'>
                    {orders?.map(order => (
                        <Order order={order}  key="{order}" />
                    ))}
                </div>
            </div>
        )
        
}

export default Orders
