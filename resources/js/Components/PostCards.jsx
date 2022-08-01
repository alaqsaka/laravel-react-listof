import React from "react";

const isPosts = (posts) => {
    return posts?.map((post, index) => {
        return (
            <div
                className="card w-full lg:w-96 bg-white border shadow border-gray-300"
                key={index}
            >
                <div className="card-body">
                    <h2 className="card-title text-black font-bold">
                        {post.title}
                    </h2>
                    <p className="text-sm text-gray-400 font-thin">{post.description}</p>
                    <p className="text-black text-md">{post.content}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {post.category}
                        </div>
                        <div className="badge badge-outline">{post.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const noPosts = () => {
    return (
        <div>
            <p>No posts available at the moment.</p>
        </div>
    );
};

const PostCards = ({ posts }) => {
    return !posts ? noPosts() : isPosts(posts);
};

export default PostCards;
