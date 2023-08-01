import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';
import { AiFillStar } from 'react-icons/ai';

const ProductDetails = () => {
    const myData = useLoaderData();
    const { _id, email, phone, productName, price, image, quality, location, year, description } = myData;
    console.log(myData)
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count <= 1) {
            setCount(1);
        } else {
            setCount(count - 1);
        }
    };
    return (
        <div>
            <div className="md:flex justify-center items-center">
                <div className="md:flex-1">
                    <span className='flex items-center justify-center'>
                        <img className='md:h-[250px] md:w-[370px] lg:h-[350px] lg:w-[500px]' src={image} alt='' />
                    </span>
                </div>
                <div className='md:flex-1'>
                    <h1 className="text-3xl font-semibold my-2 md:my-4">{productName}</h1>
                    <span className='flex items-center gap-20'>
                        <h1 className='text-orange-600 font-semibold text-xl'> ${price}</h1>
                        <span className='flex'>
                            <AiFillStar className='text-orange-600'></AiFillStar>
                            <AiFillStar className='text-orange-600'></AiFillStar>
                            <AiFillStar className='text-orange-600'></AiFillStar>
                            <AiFillStar className='text-orange-600'></AiFillStar>
                        </span>
                    </span>
                    <p className="py-6">{description}</p>
                    <div className='text-lg font-semibold  lg:mr-32'>
                        <span>
                            <p className="flex justify-between items-center dark:text-gray-300">
                                <span className="mr-2">Quantity:</span>
                                <span className="flex items-center border border-black rounded-full dark:border-gray-300">
                                    <button
                                        onClick={handleDecrement}
                                        className="flex items-center justify-center h-8 w-8 rounded-l-full dark:bg-white border-r border-black dark:border-gray-300 "
                                    >
                                        <svg
                                            width={15}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                        </svg>
                                    </button>
                                    <p className="px-4 py-1 text-lg font-semibold">{count}</p>
                                    <button
                                        onClick={handleIncrement}
                                        className="flex items-center justify-center h-8 w-8 rounded-r-full dark:bg-white border-l border-black dark:border-gray-300"
                                    >
                                        <svg
                                            width={15}
                                            xmlns="https://icons8.com/icon/efXxtDBBjc22/add"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                                        </svg>
                                    </button>
                                </span>
                            </p>
                            <p className="flex justify-between items-center dark:text-gray-300">
                                <span>Quality:</span>
                                <span>{quality}</span>
                            </p>
                            <p className="flex justify-between items-center dark:text-gray-300">
                                <span>Location:</span>
                                <span>{location}</span>
                            </p>
                            <p className="flex justify-between items-center dark:text-gray-300">
                                <span>Purchase Year:</span>
                                <span>{year}</span>
                            </p>
                            <p className="flex justify-between items-center dark:text-gray-300">
                                <span>Seller Phone No:</span>
                                <span>{phone}</span>
                            </p>
                            <p className="flex justify-between items-center dark:text-gray-300">
                                <span>Seller Email:</span>
                                <span>{email}</span>
                            </p>
                        </span>
                    </div>
                    <div className='my-3 md:my-6'>
                        <PrimaryBtn unique={"btn btn-xs sm:btn-sm md:btn-md"}>Add To Cart</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;