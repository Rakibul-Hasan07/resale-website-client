import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)

    // <li><Link>Add a Products</Link></li>
    // <li><Link>My Products</Link></li>
    // <li><Link>My Buyers</Link></li>
    // <li><Link>My Orders</Link></li>
    // <li><Link>All Sellers</Link></li>
    // <li><Link>All Buyers</Link></li>
    // <li><Link>Reported Items</Link></li>
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-blue-500 text-base-content">
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/users/all-users'>All Sellers</Link></li>
                                <li><Link>All Buyers</Link></li>
                                <li><Link>Reported Items</Link></li>
                            </>
                        }
                        {
                            isBuyer && <>
                                <li><Link>My Orders</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link>Add a Products</Link></li>
                                <li><Link>My Products</Link></li>
                                <li><Link>My Buyers</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;