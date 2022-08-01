import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import PostCards from "@/Components/PostCards";
import Paginator from "@/Components/Homepage/Paginator";

const Homepage = (props) => {
    console.log(props);
    return (
        <div className="min-h-screen bg-white">
            <Head title={props.title} />
            <Navbar />
            <div
                className="flex justify-center 
                flex-col lg:flex-row lg:flex-wrap 
                lg:items-stretch items-center  gap-4 p-4"
            >
                <PostCards posts={props.posts.data} />
            </div>
            <div className="flex justify-center items-center p-3">
                <Paginator meta={props?.posts?.meta}/>
            </div>
        </div>
    );
};

export default Homepage;
