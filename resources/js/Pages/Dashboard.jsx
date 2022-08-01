import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [isNotif, setisNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            content,
            category,
        };

        // Create new POST of LISTOF
        // Parameter pertama itu routing dari web.php
        // Parameter kedua itu diisi sama data yang mau dikirim
        Inertia.post("posts", data);
        setisNotif(true);
        setTitle("");
        setDescription("");
        setContent("");
        setCategory("");
    };

    console.log("props last: ", props);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    My Lists
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        
                            {isNotif && (
                                <div className="alert alert-success shadow-lg">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="stroke-current flex-shrink-0 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>
                                           {props.flash.message}
                                        </span>
                                    </div>
                                </div>
                            )}
                        
                        <input
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                            type="text"
                            placeholder="List of ..."
                            className="bg-white m-2 input input-bordered w-full"
                        />
                        <input
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            value={description}
                            type="text"
                            placeholder="Description"
                            className="bg-white m-2 input input-bordered w-full"
                        />
                        <input
                            onChange={(content) =>
                                setContent(content.target.value)
                            }
                            value={content}
                            type="text"
                            placeholder="Content"
                            className="bg-white m-2 input input-bordered w-full"
                        />
                        <input
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            value={category}
                            type="text"
                            placeholder="Category"
                            className="bg-white m-2 input input-bordered w-full"
                        />
                        <button
                            className="btn btn-primary m-2"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
