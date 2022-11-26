import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';

const DaynamicModal = ({ product }) => {
    console.log(product);
    const { image, location, sellerName, resale, original, useYear, productName } = product;
    const { user } = useContext(AuthContext);
    return (
        <div>
            <input type="checkbox" id="resale-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="hero">
                        <div className="hero-content flex-col">
                            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" value={user?.displayName} readOnly className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" value={user?.email} readOnly className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" name='product' placeholder="product" value={productName} readOnly className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name='price' placeholder="price" value={resale} readOnly className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="text" name='phone' placeholder="phone" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Meeting Location</span>
                                        </label>
                                        <input type="text" name='place' placeholder="place" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6 text-center">
                                        <PrimaryBtn unique={'w-full'}>Login</PrimaryBtn>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="resale-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaynamicModal;