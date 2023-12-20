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
            console.log(data)
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
                    <Tab.List className="flex justify-between p-2 space-x-1 rounded-xl bg-blue-900/20">
                        {
                            categoryData.map(category =>

                                <Link className='my-1' to={`/category/products/${category.id}`}>
                                    <Tab
                                        key={category._id}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-900 dark:text-white',
                                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-800 focus:outline-none focus:ring-2',
                                                selected
                                                    ? 'bg-white dark:text-black shadow p-6'
                                                    : 'text-black p-3 hover:bg-white/[0.12] hover:text-white'
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
    