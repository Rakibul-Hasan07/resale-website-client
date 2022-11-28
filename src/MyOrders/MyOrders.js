import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: myOrders } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://resale-website-server.vercel.app/bookings?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <div className="overflow-x-auto mb-40">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Products Name</th>
                            <th>Price</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.email}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;