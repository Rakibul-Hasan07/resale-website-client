import React from 'react';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const Carousel = () => {
    return (
        <div className='lg:flex mt-6 justify-center items-center ' >
            <div className='lg:flex-1 lg:px-10'>
                <h1 className='font-bold text-4xl text-center'>We Help you to <br /> suggests good products</h1>
                <p className='font-bold text-xl m-4'>We are provide second hand products service. You visits our website and choose your products.You can buy budge friendly products.</p>
                <div className='flex gap-8 mt-4'>
                    <PrimaryBtn>Contact Us</PrimaryBtn>
                    <PrimaryBtn>See Products</PrimaryBtn>
                </div>
            </div>
            <div className="carousel w-full lg:flex-1">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/j85Jyf3/carousel5.jpg" className="w-full h-[300px]" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle btn-outline">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/f0D0Nfh/carousel1.jpg" className="w-full h-[300px]" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-outline">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/yfkNmz4/carousel2.jpg" className="w-full h-[300px]" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-outline">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/J5SjMXN/carousel4.jpg" className="w-full h-[300px]" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-outline">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;