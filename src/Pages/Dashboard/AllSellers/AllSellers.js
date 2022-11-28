import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllSellers = () => {
    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-website-server.vercel.app/users')
            const data = await res.json()
            return data;
        }
    })
    // console.log(data);
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {

                    }
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;