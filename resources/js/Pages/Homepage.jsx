import React from 'react'
import { Link, Head } from '@inertiajs/inertia-react';


const Homepage = (props) => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-50'>
        <Head title={props.title} />
        
        <div>
            {props.posts ? props.posts.map((post, idx) => {
                return ( 
                    <div key={idx} className="p-4 m-2 bg-white text-black shadow-md border rounded-md">
                        <p className='text-2xl'>{post.title}</p>
                        <p>{post.description}</p>
                        <p>{post.category}</p>
                        <p>{post.content}</p>
                        <p className='text-sm'>{post.title}</p>
                        <p className='text-sm'>{post.author}</p>
                    </div>
                )
            }) : <p>No Data</p>}
        </div>
        
    </div>
  )
}

export default Homepage