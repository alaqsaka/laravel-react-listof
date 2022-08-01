import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import PostCard from "@/Components/PostCard";

const Homepage = (props) => {
    return (
        <div className="h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar />
            <div>
                {/* {props.posts ? props.posts.map((post, idx) => {
                return ( 
                    <div key={idx} className="p-4 m-2 bg-white text-gray-900 shadow-md border rounded-md">
                        <p className='text-2xl font-bold'>{post.title}</p>
                        <p>{post.description}</p>
                        <p>{post.category}</p>
                        <p>{post.content}</p>
                        <p className='text-sm'>{post.title}</p>
                        <p className='text-sm'>{post.author}</p>
                    </div>
                )
            }) : <p>Can’t find any data.</p>} */}
                <PostCard />
            </div>
        </div>
    );
};

export default Homepage;
