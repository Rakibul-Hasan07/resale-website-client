import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LenovoLaptop = () => {
    const category = useLoaderData()
    console.log(category);
    return (
        <div>
            <h3>This is lenovo collection</h3>
        </div>
    );
};

export default LenovoLaptop;