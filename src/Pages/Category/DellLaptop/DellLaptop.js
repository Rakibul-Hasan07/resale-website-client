import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DellLaptop = () => {
    const category = useLoaderData();
    console.log(category);
    return (
        <div>
            <h3>This is dell collection</h3>
        </div>
    );
};

export default DellLaptop;