import React from "react";

const isPosts = (posts) => {
    return posts?.map((post, index) => {
        return (
            <div className="card w-96 bg-white shadow-xl" key={index}>
                <figure>
                    <img
                        src="https://placeimg.com/400/225/arch"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {post.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{post.description}</p>
                    <p>{post.content}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {post.category}
                        </div>
                        <div className="badge badge-outline">
                            {post.author}
                        </div>
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
    )
}

const PostCards = ({ posts }) => {
    return !posts ? noPosts() : isPosts(posts)
};

export default PostCards;
