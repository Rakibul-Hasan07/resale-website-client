import React, { useState } from 'react';
import { MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import DaynamicModal from '../DaynamicModal/DaynamicModal';

const ProductCard = ({ product }) => {
    const { image, location, sellerName, resale, original, useYear, productName } = product;
    const [modalData, setModalData] = useState({})
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-[300px] h-[200px] lg:w-[300px] lg:h-[200px]' src={image} alt="" /></figure>
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
                    <div className="card-actions justify-center">
                        <PrimaryBtn><label onClick={() => setModalData(product)} htmlFor="resale-modal">Book Now</label></PrimaryBtn>

                    </div>
                </div>
            </div>
            <DaynamicModal
                product={modalData}
            >

            </DaynamicModal>
        </div>
    );
};

export default ProductCard;