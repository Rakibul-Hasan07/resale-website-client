import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';

const Root = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;