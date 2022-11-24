import React from 'react';
import { Link } from 'react-router-dom';

const CategoryOption = () => {
    return (
        <div>
            <h3 className='text-center font-bold text-3xl'>Select Your Own Choose</h3>
            <ul className="menu bg-base-100 w-56 rounded-box">
                <li><Link to='new-collection'>New Collection</Link></li>
                <li><Link to='hp-collection'>HP Laptop</Link></li>
                <li><Link to='lenovo-collection'>Lenovo Laptop</Link></li>
                <li><Link to='dell-collection'>Dell Laptop</Link></li>
            </ul>
        </div>
    );
};

export default CategoryOption;