import React from 'react';

const PrimaryBtn = ({ children, unique }) => {
    return (
        <div>
            <button className={`btn bg-gradient-to-r from-cyan-500 to-blue-500 border-none ${unique}`}>{children}</button>
        </div>
    );
};

export default PrimaryBtn;