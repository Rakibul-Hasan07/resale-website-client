import React, { useEffect, useState } from 'react';
import AdvertiseItemsCard from './AdvertiseItemsCard'
import Loading from '../../../Components/Loading/Loading';

const AdvertiseItems = () => {
    const [advertiseData, setAdvertiseData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://resale-website-server.vercel.app/api/v1/get-advertise')
            .then(res => res.json())
            .then(data => {
                setAdvertiseData(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {advertiseData.length && <h3 className='text-4xl font-bold text-center mt-10'>Advertise Items</h3>}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 mb-20'>
                {
                    advertiseData && advertiseData.map(advertise => <AdvertiseItemsCard key={advertise._id} advertise={advertise}></AdvertiseItemsCard>)
                }
            </div>
        </div>
    );
};

export default AdvertiseItems;