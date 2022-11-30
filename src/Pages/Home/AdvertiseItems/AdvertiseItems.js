import React, { useEffect, useState } from 'react';
import AdvertiseItemsCard from './AdvertiseItemsCard';

const AdvertiseItems = () => {
    const [advertiseData, setAdvertiseData] = useState([])
    useEffect(() => {
        fetch('https://resale-website-server.vercel.app/add-advertise')
            .then(res => res.json())
            .then(data => setAdvertiseData(data))
    }, [])
    return (
        <div>
            {advertiseData && <h3 className='text-4xl font-bold text-center mt-10'>Advertise Items</h3>}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-20'>
                {
                    advertiseData && advertiseData.map(advertise => <AdvertiseItemsCard key={advertise._id} advertise={advertise}></AdvertiseItemsCard>)
                }
            </div>
        </div>
    );
};

export default AdvertiseItems;