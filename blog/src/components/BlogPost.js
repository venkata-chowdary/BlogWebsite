import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BlogPost(props) {
    const [shortenedDescription, setShortenedDescription] = useState("");

    useEffect(() => {
        const newDescription = props.blogDescription.slice(0, 100);
        setShortenedDescription(newDescription);
    }, [props.blogDescription]);

    console.log(props);
    return (
        <div className="post">
            <div className="post-head">
                <h3 className="post-title">{props.blogTitle}</h3>
            </div>
            <div className="post-body">
                <p className="post-description">{shortenedDescription}</p>
                <p className="read-more-btn">
                    <Link to={`/blog/${props.blogId}`}>Read More...</Link>
                </p>
            </div>
        </div>
    );
}

export default BlogPost;
