import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const HpLaptop = () => {
    const category = useLoaderData();
    const productsItems = category.categoryProducts;
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    productsItems.map((product, idx) => <div key={idx}>
                        <ProductCard product={product}></ProductCard>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HpLaptop;