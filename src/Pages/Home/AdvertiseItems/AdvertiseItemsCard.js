import React from 'react';

const AdvertiseItemsCard = ({ advertise }) => {
    const { productName, price, image, quality, location, year } = advertise;
    return (
        <div>
            <div className="card bg-blue-600 shadow-xl lg:h-[450px]">
                <figure><img className='p-5' src={image} alt="" /></figure>
                <div className="card-body text-center text-xl font-bold">
                    <h2 className="card-title text-2xl font-bold">{productName}</h2>
                    <p>Price:$ {price}</p>
                    <p>Quality: {quality}</p>
                    <p>Location: {location}</p>
                    <p>Purchase Year: {year}</p>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseItemsCard;