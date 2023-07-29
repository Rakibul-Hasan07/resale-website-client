import React, { useContext } from 'react';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const AdvertiseItemsCard = ({ advertise }) => {
    const { setProduct } = useContext(AuthContext)
    const { _id, email, phone, productName, price, image, quality, location, year } = advertise;
    const transactionId = Math.ceil(Math.random(16) * 100000000)
    const payData = {
        productName,
        price,
        image,
        quality,
        location,
        year,
        transactionId,
        paymentType: false,
        _id,
        email,
        phone
    }
    const handlePayment = async () => {
        await axios.post(' https://resale-website-server.vercel.app/api/v1/v1/payment/init', {
            payData
        })
            .then(res => {
                console.log(res.data)
                window.location.replace(res.data)
            })

            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="card bg-slate-100 dark:bg-slate-700 shadow-xl lg:h-[450px]">
                <figure><img className='p-5 mt-6' src={image} alt="" /></figure>
                <div className="card-body text-lg font-bold">

                    <h2 className="card-title text-xl font-bold">{productName}</h2>
                    <span className='flex items-center justify-between'>
                        <p className='flex'>
                            <AiFillStar className='text-orange-600'></AiFillStar>
                            <AiFillStar className='text-orange-600'></AiFillStar>
                            <AiFillStar className='text-orange-600'></AiFillStar>
                            <AiFillStar className='text-orange-600'></AiFillStar>
                        </p>
                        <p className='bg-blue-400 text-center rounded-lg'>{quality}</p>
                    </span>
                    <p>$ {price}</p>
                    <span className='flex justify-center items-center'>
                        <p className='flex items-center'> <FaLocationArrow></FaLocationArrow> {location}</p>
                        <p className='flex items-center'> <AiOutlineShoppingCart></AiOutlineShoppingCart> {year}</p>
                    </span>
                </div>
                <div className='flex justify-between items-center mx-2'>
                    <span onClick={handlePayment} className='text-center mb-6'>
                        <PrimaryBtn>Buy Now</PrimaryBtn>
                    </span>
                    <span className='text-center mb-6'>
                        <Link to={`/details/${_id}`}><PrimaryBtn>Details</PrimaryBtn></Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseItemsCard;