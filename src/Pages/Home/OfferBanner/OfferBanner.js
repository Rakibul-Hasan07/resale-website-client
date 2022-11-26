import React from 'react';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const OfferBanner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center my-5 gap-4'>
            <div className='flex-1'>
                <h3 className='font-bold text-5xl'>OFFER <span className='text-orange-500'>FRIDAY!</span></h3>
                <p>up to</p>
                <h3 className='font-bold text-5xl'>20% OFF</h3>
                <h4 className='font-bold text-3xl'>For All Laptops</h4>
            </div>
            <div className='flex-1'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className="card bg-blue-600 shadow-xl">
                        <div className="card-body text-center">
                            <h2 className="font-bold text-3xl">HP LAPTOP</h2>
                            <h3 className='font-bold text-3xl'>17+</h3>
                            <p>Collection</p>
                            <div className="card-actions justify-center">
                                <PrimaryBtn>See Now</PrimaryBtn>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl bg-blue-600 ">
                        <div className="card-body text-center">
                            <h2 className="font-bold text-3xl">DELL LAPTOP</h2>
                            <h3 className='font-bold text-3xl'>14+</h3>
                            <p>Collection</p>
                            <div className="card-actions justify-center">
                                <PrimaryBtn>See Now</PrimaryBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferBanner;