import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-white">
            <div className="flex-1">
                <Link
                    className="btn btn-ghost normal-case font-semibold text-2xl text-black"
                    href="/"
                >
                    Listof
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control bg-white">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-white input input-bordered hidden md:block"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul
                        tabIndex="0"
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        as="button"
                                        className="justify-between"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
