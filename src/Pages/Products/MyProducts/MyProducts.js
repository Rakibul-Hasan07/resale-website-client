import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import DeleteModal from '../../../Components/DeleteModal/DeleteModal';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [productsData, setProductsData] = useState(null)
    const closeModal = () => {
        setProductsData(null);
    }

    const successModal = id => {
        fetch(`https://resale-website-server.vercel.app/api/v1/add-products/${id}`, {
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


    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['add-products', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://resale-website-server.vercel.app/api/v1/add-products?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    const handleAdvertise = (product) => {
        const myAdvertiseProducts = {
            productName: product.productName,
            email: user?.email,
            image: product.image,
            price: product.price,
            quality: product.quality,
            phone: product.phone,
            location: product.location,
            category: product.category,
            description: product.description,
            year: product.year
        }
        fetch('https://resale-website-server.vercel.app/api/v1/add-advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(myAdvertiseProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === false) {
                    toast.error('Already Advertised')
                }
                else {
                    toast.success('Product Advertised')
                }

            })
    }

    if (isLoading) {
        return <button className="btn loading">loading</button>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Sales Status</th>
                            <th>Action</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((product, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{product.productName}</td>
                                <td>$ {product.price}</td>
                                <td><button className='btn btn-xs btn-info'>available</button></td>
                                <td>
                                    <label onClick={() => setProductsData(product)} htmlFor="my-confirmation" className="btn btn-xs btn-error">delete</label>
                                </td>
                                <td><button onClick={() => handleAdvertise(product)} className='btn btn-xs btn-success'>advertise</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                productsData && <DeleteModal
                    title={'Are You Sure To Delete'}
                    message={'If you are delete this you cannot recover'}
                    closeModal={closeModal}
                    successModal={successModal}
                    modalData={productsData}
                >

                </DeleteModal>
            }
        </div>
    );
};

export default MyProducts;