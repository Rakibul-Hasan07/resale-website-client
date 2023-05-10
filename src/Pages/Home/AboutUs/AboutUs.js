import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="hero mb-20">
                <div className="lg:flex justify-center items-center">
                    <div className='lg:flex-1'>
                        <img src="https://i.ibb.co/zsXbmgd/aboutus.jpg" className="lg:w-[500px] rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:flex-1 my-5'>
                    <div className='lg:px-20'>
                        <h1 className="text-5xl font-bold uppercase">About us</h1>
                        <p className="py-6">Our organization is the best for second hand products. We are provide best service for second hand products. Our customer is very happy to buy budge friendly products and review our services.</p>
                        <button className="btn btn-primary">learn more</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;