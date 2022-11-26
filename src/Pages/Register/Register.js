import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import PrimaryBtn from '../../Components/PrimaryBtn/PrimaryBtn';
import toast from 'react-hot-toast'

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const imageKey = process.env.REACT_APP_imgbbkey;


    const handleSignIn = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const role = event.target.radio.value;
        const image = event.target.image.files[0];
        const formData = new FormData();
        formData.append('image', image);

        //create user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                //image hoisting
                fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(imgData => {
                        const url = imgData.data.url;
                        //update user
                        updateUser(name, url)
                            .then(() => {
                                const userData = {
                                    name,
                                    email,
                                    url,
                                    role
                                }
                                fetch('http://localhost:5000/users', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(userData)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data.acknowledged) {
                                            toast.success('Sign in Successfully')
                                            navigate('/')
                                        }
                                    })
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="file" name='image' placeholder="name" className="input" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p>You have an account?
                                        <Link to='/login' className='text-blue-500'> Login</Link></p>
                                </label>
                            </div>
                            <div className=''>
                                <label htmlFor="seller" className='ml-3'>Seller</label>
                                <input type="radio" id="seller" name="radio" value="seller" defaultChecked />
                                <label htmlFor="buyer" className='ml-3'>Buyer</label>
                                <input type="radio" id="buyer" name="radio" value="buyer" />
                            </div>
                            <div className="form-control mt-6 text-center">
                                <PrimaryBtn unique={'w-full'}>Signin</PrimaryBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;