import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import DeleteModal from '../../../Components/DeleteModal/DeleteModal';

const AllBuyers = () => {
    const [buyerData, setBuyerData] = useState(null)

    const closeModal = () => {
        setBuyerData(null);
    }

    const successModal = id => {
        fetch(`https://resale-website-server.vercel.app/buyer/${id}`, {
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
    const { data: buyers, refetch } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch('https://resale-website-server.vercel.app/buyer')
            const data = await res.json()
            return data;
        }
    })
    console.log(buyers);
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
                            buyers?.map((buyer, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><label onClick={() => setBuyerData(buyer)} htmlFor="my-confirmation" className="btn btn-xs btn-error">delete</label></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                buyerData && <DeleteModal
                    title={'Are You Sure To Delete'}
                    message={'If you are delete this you cannot recover'}
                    closeModal={closeModal}
                    successModal={successModal}
                    modalData={buyerData}
                >

                </DeleteModal>
            }
        </div>
    );
};

export default AllBuyers;