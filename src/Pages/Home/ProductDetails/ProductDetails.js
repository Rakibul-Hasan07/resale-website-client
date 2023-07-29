import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const ProductDetails = () => {
    const myData = useLoaderData();
    const { _id, email, phone, productName, price, image, quality, location, year, description } = myData;
    console.log(myData)

    return (
        <div>
            <div className="">
                <div className="flex justify-center">
                    <img src={image} />

                </div>
                <div>
                    <h1 className="text-5xl font-bold text-center my-2 md:my-4">{productName}</h1>
                    <p className="py-6">{description}</p>
                    <div className='md:flex md:justify-evenly text-lg font-semibold'>
                        <span>
                            <h1>Product Price: ${price}</h1>
                            <h1>Seller Phone No: {phone}</h1>
                            <h1>Seller Email: {email}</h1>
                        </span>
                        <span>
                            <h1>Quality: {quality}</h1>
                            <h1>Location: {location}</h1>
                            <h1>Purchase Year: {year}</h1>
                        </span>
                    </div>
                </div>
            </div>
            <div className='text-center my-3 md:my-6'>
                <PrimaryBtn unique={"btn btn-xs sm:btn-sm md:btn-md"}>Add To Cart</PrimaryBtn>
            </div>
        </div>
    );
};

export default ProductDetails;