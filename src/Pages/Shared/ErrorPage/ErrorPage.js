import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className='text-center'>
                    <p className='text-2xl'>oops! page not found</p>
                    <h3 className='text-5xl font-bold text-red-600'>404</h3>
                    <h3 className='text-3xl'>we are sorry, but the page you requested was not found</h3>
                    <p className='text-xl'>Go to <Link to='/' className='text-orange-700 underline underline-offset-2'>Home</Link></p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;