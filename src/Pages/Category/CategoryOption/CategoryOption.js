import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const CategoryOption = () => {
    const { data: categoryData = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-center font-bold text-3xl'>Select Your Own Choose</h3>
            <ul className="menu bg-base-100 w-56 rounded-box">
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