import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import DeleteModal from '../../../Components/DeleteModal/DeleteModal';

const AllSellers = () => {
    const [sellerData, setSellerData] = useState(null)
    const closeModal = () => {
        setSellerData(null);
    }

    const successModal = id => {
        fetch(`https://resale-website-server.vercel.app/api/v1/seller/${id}`, {
            method: 'DELETE',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Delete Successfully')
                    refetch();
                }
            })
    }
    const { data: users, refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('https://resale-website-server.vercel.app/api/v1/seller')
            const data = await res.json()
            return data;
        }
    })
    console.log(users);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><label onClick={() => setSellerData(user)} htmlFor="my-confirmation" className="btn btn-xs btn-error">delete</label></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                sellerData && <DeleteModal
                    title={'Are You Sure To Delete'}
                    message={'If you are delete this you cannot recover'}
                    closeModal={closeModal}
                    successModal={successModal}
                    modalData={sellerData}
                >

                </DeleteModal>
            }
        </div>

    );
};

export default AllSellers;