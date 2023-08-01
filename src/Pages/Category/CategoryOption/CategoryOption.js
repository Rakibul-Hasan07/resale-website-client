import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Components/Loading/Loading';
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CategoryOption = () => {
    const { data: categoryData = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://resale-website-server.vercel.app/api/v1/category')
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="px-2 py-2 sm:px-0 mx-10 md:mx-20 lg:mx-32 flex flex-col items-center justify-center">
                <h3 className='text-center font-bold text-2xl my-4'>Select Your Brand</h3>
                <Tab.Group className="w-full">
                    <Tab.List className="flex justify-between p-2 space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {
                            categoryData.map(category =>

                                <Link className='my-1' to={`/category/products/${category.id}`}>
                                    <Tab
                                        key={category._id}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-800 dark:text-white',
                                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                selected
                                                    ? 'bg-white dark:text-black shadow p-6'
                                                    : 'text-blue-100 p-3 hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }
                                    >
                                    {category.name}
                                    </Tab>
                                </Link>
                            )
                        }
                    </Tab.List>
                </Tab.Group>
            </div>
        </div>
    );
};

export default CategoryOption;


 // <div className='flex flex-col bg-slate-100 dark:bg-slate-700 items-center'>
            // <h3 className='text-center font-bold text-3xl my-4'>Select Your Own Choose</h3>
        //     <ul className="menu bg-base-100 dark:bg-slate-500 w-56 rounded-box font-bold text-xl mb-5">
                // {
                //     categoryData.map(category => <li key={category._id}>
                //         <Link to={`/category/products/${category.id}`}>{category.name}</Link>
                //     </li>)
                // }
        //     </ul>
        // </div>