import React, { useState } from 'react';
import { MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';

const ProductCard = ({ product, setModalData }) => {
    const { image, location, sellerName, resale, original, useYear, productName } = product;
    return (
        <div>
            <div className="card bg-gray-100 dark:bg-slate-700 shadow-xl mb-20 mt-10">
                <figure><img className='w-[300px] h-[200px] lg:w-[300px] lg:h-[200px] p-3 ' src={image} alt="" /></figure>
                <div className="card-body flex justify-center items-center">
                    <h2 className="card-title font-bold text-2xl">
                        {productName}
                    </h2>
                    <div className='flex gap-2'>
                        <MapPinIcon className="h-6 w-6" />
                        <p className='font-bold'>{location}</p>
                    </div>
                    <div className='font-bold'>
                        <p>Original Price: ${original}</p>
                        <p>Resale Price: ${resale}</p>
                    </div>
                    <div className='font-bold'>
                        <p>Uses of year: {useYear} years</p>
                    </div>
                    <div className='flex font-bold'>
                        <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                        <p>Seller: {sellerName}</p>
                    </div>
                    <div onClick={() => setModalData(product)} className="card-actions justify-center">
                    <PrimaryBtn>Book Now</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductCard;