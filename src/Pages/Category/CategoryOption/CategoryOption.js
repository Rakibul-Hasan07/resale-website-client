import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const CategoryOption = () => {
    const { data: categoryData = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://resale-website-server.vercel.app/category')
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <button className="btn loading">loading</button>
    }
    return (
        <div className='flex flex-col items-center'>
            <h3 className='text-center font-bold text-3xl my-4'>Select Your Own Choose</h3>
            <ul className="menu bg-base-100 w-56 rounded-box font-bold text-xl mb-5">
                {
                    categoryData.map(category => <li key={category._id}>
                        <Link to={`/category/products/${category.id}`}>{category.name}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default CategoryOption;