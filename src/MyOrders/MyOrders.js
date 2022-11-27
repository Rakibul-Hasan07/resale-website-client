import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    console.log(data);
    return (
        <div>
            <h3>This is my orders</h3>
        </div>
    );
};

export default MyOrders;