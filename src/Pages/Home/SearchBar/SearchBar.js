import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const SearchBar = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-10'>
                <h1 className='font-semibold text-xl'>
                    Choose your brand in categorie section{' '}
                    <span className='text-red-500'>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Dell', 'Hp', 'Lenevo', 'Apple', 'Dell', 'Hp', 'Lenevo', 'Apple', 'Dell', 'Hp', 'Lenevo', 'Apple']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>
        </div>
    );
};
export default SearchBar;