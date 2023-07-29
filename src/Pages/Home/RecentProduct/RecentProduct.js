import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Components/Loading/Loading';
import RecentProductCart from '../../../Components/RecentProductCart/RecentProductCart';

const RecentProduct = () => {
    const { isLoading, error, data: products } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://resale-website-server-rakibul-hasan07.vercel.app/api/v1/recent-product')
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        return <h1>Something went wrong.....</h1>
    }
    console.log(products)
    return (
        <div>
            <h1 className='text-2xl md:4 md:mb-6'>Recent Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb:4 md:mb-10'>
                {
                    products && products.map((product, _id) => <div key={_id}>
                        <RecentProductCart product={product}></RecentProductCart>
                    </div>)
                }
            </div>
        </div>
    );
};

export default RecentProduct;