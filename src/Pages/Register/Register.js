import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import PrimaryBtn from '../../Components/PrimaryBtn/PrimaryBtn';
import toast from 'react-hot-toast'
import useToken from '../../hooks/useToken';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('')
    const navigate = useNavigate();
    const imageKey = process.env.REACT_APP_imgbbkey;

    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail);
    if (token) {
        navigate('/')
    }
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
                                toast.success('Sign in Successfully')
                                const userData = {
                                    name,
                                    email,
                                    url,
                                    role
                                }
                                fetch('https://resale-website-server.vercel.app/api/v1/users', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(userData)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data.acknowledged) {
                                            console.log(data)
                                            setUserEmail(email);
                                        }
                                    })
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    })

            })
            .catch(error => {
                if(error){
                    setRegisterError(error)
                }
                else{
                    setRegisterError('')
                }
                console.log('hello',error);
            })
    }
    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl font-bold">Register Here!</h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className='md:w-full hidden md:block'>
                    <img className='md:w-full' src='https://i.ibb.co/k5BpGmV/26564469.jpg'></img>
                </div>
                <div className="hero">

                    <div className="hero-content flex-col">

                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <span className='text-red-500 -mb-8 text-center mt-2'>{registerError.message}</span>
                            <form onSubmit={handleSignIn} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="file" name='image' placeholder="name" className="input" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label className="label">
                                        <p>You have an account?
                                            <Link to='/login' className='text-blue-500'> Login</Link></p>
                                    </label>
                                </div>
                                <div className='flex items-center gap-2'>
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
        </div>
    );
};

export default Register;