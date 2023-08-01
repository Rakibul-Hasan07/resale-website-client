import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import toast from 'react-hot-toast'

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
        fetch('https://resale-website-server-rakibul-hasan07.vercel.app/api/v1/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Booked successfully')
                    setModalData(null)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box dark:bg-slate-700">

                    <div className=" dark:bg-slate-700">
                        <div className="flex-col">
                            <div className="card flex-shrink-0 w-full shadow-2xl dark:bg-slate-700 bg-base-100">
                                <form onSubmit={handleSubmit(handleModal)} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text dark:text-white">Name</span>
                                        </label>
                                        <input type="text" {...register("name", { required: true })} name='name' placeholder="name" value={user?.displayName} readOnly className="input text-black input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text dark:text-white">Email</span>
                                        </label>
                                        <input type="email" {...register("email", { required: true })} name='email' placeholder="email" value={user?.email} readOnly className="input text-black input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text dark:text-white">Product Name</span>
                                        </label>
                                        <input type="text" {...register("productName", { required: true })} name='product' placeholder="product" value={productName} readOnly className="input text-black input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text dark:text-white">Price</span>
                                        </label>
                                        <input type="text" {...register("price", { required: true })} name='price' placeholder="price" value={resale} readOnly className="input text-black input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text dark:text-white">Phone</span>
                                        </label>
                                        <input type="text" {...register("phone", { required: true })} name='phone' placeholder="phone" className="input text-black input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text dark:text-white">Meeting Location</span>
                                        </label>
                                        <input type="text" {...register("place", { required: true })} name='place' placeholder="place" className="input text-black input-bordered" />
                                    </div>
                                    <div className="form-control mt-6 text-center">
                                        <PrimaryBtn unique={'w-full'}>Submit</PrimaryBtn>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-2">
                        <label htmlFor="my_modal_6" className="btn rounded-full">X</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaynamicModal;