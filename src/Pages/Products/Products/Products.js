import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const Products = () => {
    const { register, handleSubmit } = useForm();
    const imageKey = process.env.REACT_APP_imgbbkey;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const { data: categoryName = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://resale-website-server.vercel.app/api/v1/category')
            const data = await res.json();
            return data;   
        }
    });

    const handleAddProduct = data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const myProducts = {
                    productName: data.name,
                    email: user?.email,
                    price: data.price,
                    image: imgData.data.url,
                    quality: data.quality,
                    phone: data.phone,
                    location: data.location,
                    category: data.category,
                    description: data.description,
                    year: data.year
                }
                console.log(data.category)
                fetch('https://resale-website-server.vercel.app/api/v1/add-products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(myProducts)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            toast.success('Add Products Successfully')
                            navigate('/dashboard/my-products')
                        }
                    })
            })
    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Add Products</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 dark:bg-slate-700">
                        <form onSubmit={handleSubmit(handleAddProduct)} className="card-body  md:grid grid-cols-2 items-center justify-center">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Product Name</span>
                                </label>
                                <input type="text" {...register('name')} name='name' placeholder="product-name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Photo</span>
                                </label>
                                <input type="file" {...register("image")} placeholder="photo" className="input" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Price</span>
                                </label>
                                <input type="text" {...register('price')} name='price' placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Condition</span>
                                </label>
                                <select {...register('quality')} className="select select-bordered w-full max-w-xs dark:text-black">
                                    <option disabled selected>Select Condition</option>
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Phone</span>
                                </label>
                                <input type="text" {...register('phone')} name='phone' placeholder="phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Location</span>
                                </label>
                                <input type="text" {...register('location')} name='location' placeholder="location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Category</span>
                                </label>
                                <select {...register('category')} className="select select-bordered w-full max-w-xs dark:text-black">
                                    <option disabled selected>Select Category</option>
                                    {
                                        categoryName.map((category, idx) => <option key={idx}>{category.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Description</span>
                                </label>
                                <input type="text" {...register('description')} name='description' placeholder="description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Purchase Year</span>
                                </label>
                                <input type="text" {...register('year')} name='year' placeholder="year" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 text-center">
                                <PrimaryBtn unique={'w-full'}>Submit</PrimaryBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Products;