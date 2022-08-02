import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

const EditPost = (props) => {
    console.log("edit props ", props);
    const [title, setTitle] = useState(props?.myPost?.title);
    const [description, setDescription] = useState(props?.myPost?.description);
    const [category, setCategory] = useState(props?.myPost?.category);
    const [content, setContent] = useState(props?.myPost?.content);
    const [isNotif, setisNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            id: props.myPost.id,
            title,
            description,
            content,
            category,
        };

        console.log(data)
        // Create new POST of LISTOF
        // Parameter pertama itu routing dari web.php
        // Parameter kedua itu diisi sama data yang mau dikirim
        Inertia.post("/posts/update", data);
        setisNotif(true);
    };

    return (
        <div className="min-h-screen bg-white">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            
            <div className="p-3">
                {props.myPost && (
                    <div className="card w-full lg:w-full bg-white border shadow border-gray-300 rounded-sm mt-5">
                        <h1 className="text-black text-center text-3xl mt-3">Edit List</h1>
                        <div className="card-body">
                            <div className="form-control bg-white">
                                <label className="label">
                                    <span className="label-text text-black">
                                        List Title
                                    </span>
                                </label>
                                <input
                                    onChange={(title) =>
                                        setTitle(title.target.value)
                                    }
                                    defaultValue={props.myPost.title}
                                    type="text"
                                    placeholder="List of ..."
                                    className="bg-white input input-bordered w-full border-gray-400"
                                />
                            </div>
                            <div className="form-control bg-white">
                                <label className="label">
                                    <span className="label-text text-black">
                                        List Description
                                    </span>
                                </label>
                                <input
                                    onChange={(description) =>
                                        setDescription(description.target.value)
                                    }
                                    defaultValue={props.myPost.description}
                                    type="text"
                                    placeholder="List of ..."
                                    className="bg-white input input-bordered w-full border-gray-400"
                                />
                            </div>
                            <div className="form-control bg-white">
                                <label className="label">
                                    <span className="label-text text-black">
                                        List Content
                                    </span>
                                </label>
                                <input
                                    onChange={(content) =>
                                        setContent(content.target.value)
                                    }
                                    defaultValue={props.myPost.content}
                                    type="text"
                                    placeholder="List of ..."
                                    className="bg-white input input-bordered w-full border-gray-400"
                                />
                            </div>
                            <div className="form-control bg-white">
                                <label className="label">
                                    <span className="label-text text-black">
                                        List Category
                                    </span>
                                </label>
                                <input
                                    onChange={(category) =>
                                        setCategory(category.target.value)
                                    }
                                    defaultValue={props.myPost.category}
                                    type="text"
                                    placeholder="List of ..."
                                    className="bg-white input input-bordered w-full border-gray-400"
                                />
                            </div>
                            <button
                                className="btn btn-primary mt-3"
                                onClick={() => handleSubmit()}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EditPost;
