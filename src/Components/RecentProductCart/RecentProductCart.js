import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const RecentProductCart = ({ product }) => {

    const { image, price, description, rating, productName } = product;
    return (
        <div>
            <div className="card bg-slate-100 dark:bg-slate-700 shadow-xl lg:h-[450px]">
                <div className="badge badge-secondary">New</div>
                <figure><img className='p-5 mt-1 w-[300px] h-[200px] lg:w-[300px] lg:h-[200px]' src={image} alt="" /></figure>
                <div className="card-body font-semibold">
                    <div className='flex items-center'>
                        <h2 className="card-title text-sm font-semibold">{productName}</h2>
                        <p className='text-red-500 text-end'>${price}</p>
                    </div>
                    <div>
                        <h5 className='mr-6'>{description.slice(0, 60) + '.....'}</h5>
                    </div>
                    <span className='flex items-center justify-between mt-1'>
                        <p className='flex'>
                            {
                                rating === 3 ? <>
                                    <AiFillStar className='text-orange-600'></AiFillStar>
                                    <AiFillStar className='text-orange-600'></AiFillStar>
                                    <AiFillStar className='text-orange-600'></AiFillStar>
                                </> : rating === 4 ? <>
                                    <AiFillStar className='text-orange-600'></AiFillStar>
                                    <AiFillStar className='text-orange-600'></AiFillStar>
                                    <AiFillStar className='text-orange-600'></AiFillStar>
                                    <AiFillStar className='text-orange-600'></AiFillStar>
                                </> :
                                    <>
                                        <AiFillStar className='text-orange-600'></AiFillStar>
                                        <AiFillStar className='text-orange-600'></AiFillStar>
                                        <AiFillStar className='text-orange-600'></AiFillStar>
                                        <AiFillStar className='text-orange-600'></AiFillStar>
                                        <AiFillStar className='text-orange-600'></AiFillStar>
                                    </>
                            }
                        </p>
                        <span className='text-center'>
                            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-md text-white border-none'>Buy Now</button>
                            {/* <PrimaryBtn unique={'py-0'}>Buy Now</PrimaryBtn> */}
                        </span>
                    </span>
                </div>

            </div>
        </div >
    );
};

export default RecentProductCart;