import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    // const [isUsers] = useUsers(user?.email);
    const { data: users, isLoading } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://resale-website-server.vercel.app/users/${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    console.log(users);
    if (isLoading) {
        return <button className="btn loading">loading</button>
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side border bg-gray-100 dark:bg-slate-700">

                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 flex items-center dark:text-white  text-base-content">
                        <div className="mb-10 px-20 py-4">
                            <div className="">
                                <img className='w-24 h-24 rounded-full' src={users?.url} />
                            </div>
                            <div className="mt-4">
                                <p>{users?.name}</p>
                            </div>
                            <div className="mt-4">
                                <p>{users?.email}</p>
                            </div>
                        </div>
                        <hr/>
                        {/* {
                            users.map(user => <div>
                                {
                                    user.role === 'admin' ?
                                        <>
                                            <li><Link to='/dashboard/users/all-users'>All Sellers</Link></li>
                                            <li><Link>All Buyers</Link></li>
                                            <li><Link>Reported Items</Link></li>
                                        </>
                                        : null
                                }
                                {
                                    user.role === 'seller' ?
                                        <>
                                            <li><Link to='/dashboard/users/all-users'>Add a Products</Link></li>
                                            <li><Link>My Products</Link></li>
                                            <li><Link>My Buyers</Link></li>
                                        </>
                                        : null
                                }
                                {
                                    user.role === 'buyer' ?
                                        <li><Link>My Orders</Link></li>
                                        : null
                                }
                            </div>)
                        } */}
                        {
                            users?.role === 'admin' ?
                                <>
                                    <li className='bg-gray-300 dark:bg-slate-400 m-1 w-36'><Link to='/dashboard/users/all-seller'>All Sellers</Link></li>
                                    <li className='bg-gray-300 dark:bg-slate-400 m-1 w-36'><Link to='/dashboard/users/all-buyer'>All Buyers</Link></li>
                                    <li className='bg-gray-300 dark:bg-slate-400 m-1 w-36'><Link>Reported Items</Link></li>
                                </>
                                : null
                        }
                        {
                            users?.role === 'seller' ?
                                <>
                                    <li className='bg-gray-300 dark:bg-slate-400 m-1 w-36'><Link to='/dashboard/add-products'>Add a Products</Link></li>
                                    <li className='bg-gray-300 dark:bg-slate-400 m-1 w-36'><Link to='/dashboard/my-products'>My Products</Link></li>
                                    <li className='bg-gray-300 dark:bg-slate-400 m-1 w-36'><Link>My Buyers</Link></li>
                                </>
                                : null
                        }
                        {
                            users?.role === 'buyer' ?
                                <li className='bg-gray-300 dark:bg-slate-400 m-1 w-36'><Link>My Orders</Link></li>
                                : null
                        }


                    </ul>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;