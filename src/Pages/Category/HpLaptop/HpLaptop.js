import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const HpLaptop = () => {

    const { data: hpProducts = [], isLoading } = useQuery({
        queryKey: ['hp-collection'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/hp-collection')
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    hpProducts.map(hpProduct => <div key={hpProduct._id}>
                        <ProductCard hpProduct={hpProduct}></ProductCard>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HpLaptop;