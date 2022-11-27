import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }
    const navMenu = <>
        <li><Link to='/'>Home</Link></li>
        {
            user?.uid ?
                <li><Link to='/dashboard'>Dashboard</Link></li> : <></>
        }
        <li><Link to='/category'>Category</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/'>About Us</Link></li>
        <li><Link to='/'>Contact Us</Link></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl">ResaleXpress</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <PrimaryBtn unique={"btn-sm"}><Link onClick={handleLogout} to='/login'>LogOut</Link></PrimaryBtn> : <>
                            <PrimaryBtn unique={"btn-sm"}><Link to='/login'>Login</Link></PrimaryBtn>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;