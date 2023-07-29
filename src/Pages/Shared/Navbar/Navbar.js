import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';
import resaleLogo from '../../../assets/resale (2).png'

const Navbar = () => {
    const { user, logOut, theme, setTheme } = useContext(AuthContext)

    // console.log(isTrue);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const navMenu = <>
        <li><Link to='/'>Home</Link></li>
        {
            user?.uid ?
                <li><Link to='/dashboard'>Dashboard</Link></li> : <></>
        }
        <li><Link to='/category'>Categories</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/'>About Us</Link></li>
        <li><Link to='/contactus'>Contact Us</Link></li>
    </>
    return (
        <div className="navbar dark:bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <img className='w-10 h-10 rounded-full' src={resaleLogo} alt="" />
                <Link to='/' className="normal-case text-2xl text-orange-700">ResaleXpress</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navMenu}
                </ul>
            </div>

            <div className="navbar-end gap-3">
                {
                    user?.uid ?
                        <PrimaryBtn unique={"btn-sm"}><Link onClick={handleLogout} to='/login'>LogOut</Link></PrimaryBtn> : <>
                            <PrimaryBtn unique={"btn-sm"}><Link to='/login'>Login</Link></PrimaryBtn>
                            <PrimaryBtn unique={"btn-sm"}><Link to='/register'>Register</Link></PrimaryBtn>
                        </>
                }
            </div>
            { user?.photoURL ?
                <div className='ml-2'>
                <img className='w-14 h-10 rounded-full' title={user?.displayName} src={user?.photoURL} />
            </div> : ''
            }
            <div className='ml-2'>

                {
                    theme === "light" ? <button onClick={() => setTheme("dark")} > <i className="ri-sun-line text-2xl"></i></button> : <button onClick={() => setTheme("light")}> <i className="ri-moon-line text-2xl"></i></button>
                }
            </div>
        </div>
    );
};

export default Navbar;