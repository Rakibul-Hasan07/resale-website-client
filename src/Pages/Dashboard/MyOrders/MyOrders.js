import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { email } = user;
    const { data: bookings, isLoading } = useQuery({
        queryKey: ['email', email],
        queryFn: async () => {
            const res = await fetch(`https://resale-website-server.vercel.app/api/v1/bookings?email=${email}`)
            const data = await res.json();
            console.log(data)
            return data;
        }
    })
    console.log(bookings)
    return (
        <div className=' bg-white px-6 py-10 h-[100vh] lg:px-8'>
            <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                    <tr className=''>
                        <th scope="col" className="px-6 py-4">Product Name</th>
                        <th scope="col" className="px-6 py-4">Name</th>
                        <th scope="col" className="px-6 py-4">Phone No</th>
                        <th scope="col" className="px-6 py-4">Place</th>
                        <th scope="col" className="px-6 py-4">Price</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        bookings?.map((booking) => {
                            const {
                                _id,
                                productName,
                                name,
                                price,
                                place,
                                phone } = booking;
                            return (
                                <tr key={_id} className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{productName}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{name}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{phone}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{place}</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;