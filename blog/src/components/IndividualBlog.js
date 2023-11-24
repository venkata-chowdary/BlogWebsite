import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogData from "../blogData";

function IndividualBlog() {
  const { targetId } = useParams();
  console.log("target id:", targetId);

  const [individualBlogData, setIndividualBlogData] = useState({
    blogTitle: "",
    blogDescription: "",
  });

  useEffect(() => {
    const indBlog = blogData.find(
      (blog) => blog.blogId === parseInt(targetId)
    );
    if (indBlog) {
      setIndividualBlogData({
        blogTitle: indBlog.blogTitle,
        blogDescription: indBlog.blogDescription,
      });
    }
  }, [targetId]);

  return (
    <div className="post individual-post">
      <div className="post-head">
        <h3 className="post-title">{individualBlogData.blogTitle}</h3>
      </div>
      <div className="post-body">
        <p className="post-description">{individualBlogData.blogDescription}</p>
      </div>
    </div>
  );
}

export default IndividualBlog;
