import React from "react";
import { Link } from "@inertiajs/inertia-react";
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group">
            {prev && (
                <Link href={prev} className="btn btn-ghost btn-sm">
                    <BsArrowLeft fontSize={15}/>
                </Link>
            )}
            <button className="btn btn-outline btn-sm">{current}</button>
            {next && (
                <Link href={next} className="btn btn-ghost btn-sm">
                    <BsArrowRight fontSize={15}/>
                </Link>
            )}
        </div>
    );
};

export default Paginator;
