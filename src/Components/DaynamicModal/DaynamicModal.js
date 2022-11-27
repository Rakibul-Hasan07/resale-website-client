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
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success('Booked successfully')
                    setModalData(null)
                }
            })
        console.log(bookings);
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
                                        <input type="text" {...register("name")} name='name' placeholder="name" value={user?.displayName} readOnly className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" {...register("email")} name='email' placeholder="email" value={user?.email} readOnly className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" {...register("productName")} name='product' placeholder="product" value={productName} readOnly className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" {...register("price")} name='price' placeholder="price" value={resale} readOnly className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="text" {...register("phone")} name='phone' placeholder="phone" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Meeting Location</span>
                                        </label>
                                        <input type="text" {...register("place")} name='place' placeholder="place" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6 text-center">
                                        <Link to='/category/my-orders'><PrimaryBtn unique={'w-full'}>Submit</PrimaryBtn></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaynamicModal;