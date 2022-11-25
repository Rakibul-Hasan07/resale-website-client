import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import PrimaryBtn from '../../Components/PrimaryBtn/PrimaryBtn';
import toast from 'react-hot-toast'

const Register = () => {
    const { createUser } = useContext(AuthContext);
    
    const handleSignIn = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const radio = event.target.radio.value;
        const image = event.target.image.files;
        console.log(image);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Sign in Successfully')
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
                                <input type="radio" id="seller" name="radio" value="seller" defaultChecked />
                                <label htmlFor="seller" className='ml-3'>seller</label>
                                <input type="radio" id="buyer" name="radio" value="buyer" />
                                <label htmlFor="buyer" className='ml-3'>buyer</label>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p>You have an account?
                                        <Link to='/login' className='text-blue-500'> Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6 text-center">
                                <PrimaryBtn unique={'w-full'}>Login</PrimaryBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;