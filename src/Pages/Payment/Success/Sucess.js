import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Sucess = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get("transactionId");
    const [orderData, setOrderData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://resale-website-server.vercel.app/api/v1/get-data-transactionId/${transactionId}`)
            setOrderData(response?.data?.result)
        }
        fetchData();
    }, [transactionId]);
    console.log(orderData)
    return (
<div className="max-h-screen">
      <div className="flex flex-col justify-center items-center">
        <p className='text-2xl font-bold'>Payment Success</p>
        <div className="w-full flex flex-col justify-center items-center p-6 m-auto">
          <div
            className="mt-6 md:grid md:grid-cols-1 gap-6 p-10 text-xl font-semibold bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600"
          >
            <p>Name: {orderData?.productName}</p>
            <p>Email: {orderData?.email}</p>
            <p>Phone No: {orderData?.phone}</p>
            <p>Paid Amount: {orderData?.price}</p>
            <p>TransactionId: {orderData?.transactionId}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Sucess;