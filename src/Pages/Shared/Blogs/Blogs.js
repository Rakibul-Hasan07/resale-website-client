import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
            .then(function (response) {
                setBlogs(response.data);
            })
    }, [])
    return (
        <div>
            <div className='text-center text-4xl my-6 font-semibold'>
                <h2>Welcome to my blog page</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20'>
                {
                    blogs.map(blog => <div key={blog._id}>
                        <div className="card lg:h-[450px] shadow-xl">
                            <div className="card-body font-bold">
                                <h2 className="card-title text-3xl">{blog.question}</h2>
                                <p>{blog.answer}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;