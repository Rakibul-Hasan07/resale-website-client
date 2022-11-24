import React from 'react';
import { Outlet } from 'react-router-dom';
import CategoryOption from '../Pages/Category/CategoryOption/CategoryOption';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const CategoryLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CategoryOption></CategoryOption>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default CategoryLayout;