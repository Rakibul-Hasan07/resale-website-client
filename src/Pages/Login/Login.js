import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import PrimaryBtn from '../../Components/PrimaryBtn/PrimaryBtn';
import toast from 'react-hot-toast'
import useToken from '../../hooks/useToken';
import { AiFillGoogleCircle } from "react-icons/ai";

const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [loginEmail, setLoginEmail] = useState('')
    const [token] = useToken(loginEmail)

    if (token) {
        navigate(from, { replace: true })
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                setLoginEmail(email)
                toast.success('Login successfully')
            })
            .catch(error => {
                if (error) {
                    setLoginError(error)
                }
                else {
                    setLoginError('')
                }
            })
    }
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                const userData = {
                    name: user?.displayName,
                    email: user?.email,
                    url: user?.photoURL,
                    role: 'buyer'
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
                        console.log(data)
                        if (data.acknowledged) {
                            toast.success('Login successfully')
                            navigate('/')
                        }
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='hidden md:block'>
                <img src='https://i.ibb.co/JcHtxhY/34227831.jpg'></img>
            </div>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Login Here!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <span className='text-red-500 -mb-8 text-center mt-2'>{loginError.message}</span>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
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
                                    <p>Are you new here?
                                        <Link to='/register' className='text-blue-500'> Create Account</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-2 text-center">
                                <PrimaryBtn unique={'w-full'}>Login</PrimaryBtn>
                            </div>
                        </form>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>
                        <div onClick={handleGoogle} className="form-control text-center my-3 px-8">
                            <button className="btn btn-outline btn-success"><AiFillGoogleCircle className='w-6 h-8' /> Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;