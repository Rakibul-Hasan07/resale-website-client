import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom';

const DaynamicModal = ({ modalData, setModalData }) => {
    const { resale, productName } = modalData;
    const date = new Date();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleModal = data => {
        const bookings = {
            name: data.name,
            email: data.email,
            productName: data.productName,
            price: data.price,
            phone: data.phone,
            place: data.place,
            date
        }
        console.log(bookings);
        fetch('https://resale-website-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booked successfully')
                    setModalData(null)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="resale-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="hero">
                        <div className="hero-content flex-col">
                            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                                <form onSubmit={handleSubmit(handleModal)} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" {...register("name", { required: true })} name='name' placeholder="name" value={user?.displayName} readOnly className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" {...register("email", { required: true })} name='email' placeholder="email" value={user?.email} readOnly className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" {...register("productName", { required: true })} name='product' placeholder="product" value={productName} readOnly className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" {...register("price", { required: true })} name='price' placeholder="price" value={resale} readOnly className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="text" {...register("phone", { required: true })} name='phone' placeholder="phone" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Meeting Location</span>
                                        </label>
                                        <input type="text" {...register("place", { required: true })} name='place' placeholder="place" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6 text-center">
                                        <PrimaryBtn unique={'w-full'}>Submit</PrimaryBtn>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="resale-modal" className="btn rounded-full">X</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaynamicModal;