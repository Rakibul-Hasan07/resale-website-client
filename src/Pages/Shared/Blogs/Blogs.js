import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../../Components/Loading/Loading';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get('https://resale-website-server.vercel.app/api/v1/blogs')
            .then(function (response) {
                setBlogs(response.data);
                setLoading(false)
            })
    }, [])
    if(loading){
        return <Loading></Loading>
    }
    
    return (
        <div>
            <div className='text-center text-4xl my-6 font-semibold'>
                <h2>Welcome to my blog page</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20'>
                {
                    blogs.map(blog => <div key={blog._id}>
                        <div className="card shadow-xl shadow-cyan-500/50">
                            <div className="card-body">
                                <h2 className="card-title font-semibold text-2xl">{blog.question}</h2>
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