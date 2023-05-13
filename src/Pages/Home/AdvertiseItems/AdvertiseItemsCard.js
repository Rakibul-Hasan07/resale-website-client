import React from 'react';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const AdvertiseItemsCard = ({ advertise }) => {
    const { productName, price, image, quality, location, year } = advertise;
    return (
        <div>
            <div className="card dark:bg-slate-500 shadow-xl lg:h-[450px]">
                <figure><img className='p-5' src={image} alt="" /></figure>
                <div className="card-body text-xl font-bold">

                    <h2 className="card-title text-2xl font-bold">{productName}</h2>
                    <span className='flex items-center justify-between'>
                        <p className='flex'>
                            <AiFillStar className='text-orange-600'></AiFillStar>
                            <AiFillStar className='text-orange-600'></AiFillStar>
                            <AiFillStar className='text-orange-600'></AiFillStar>
                            <AiFillStar className='text-orange-600'></AiFillStar>
                        </p>
                        <p className='bg-blue-400 text-center'>{quality}</p>
                    </span>
                    <p>$ {price}</p>
                    <span className='flex justify-center items-center'>
                        <p className='flex items-center'> <FaLocationArrow></FaLocationArrow> {location}</p>
                        <p className='flex items-center'> <AiOutlineShoppingCart></AiOutlineShoppingCart> {year}</p>
                    </span>
                </div>
                <span className='text-center mb-6'>
                    <PrimaryBtn>Buy Now</PrimaryBtn>
                </span>
            </div>
        </div>
    );
};

export default AdvertiseItemsCard;