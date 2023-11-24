import React, { useState } from "react";
import '../App.css';
import '../blogData'
import blogData from "../blogData";
import { useNavigate } from "react-router-dom";
function CreatePost() {
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        blogTitle:'',
        blogDescription:''
    })

    const [blogs,setBlogs]=useState(blogData)

    function handleChange(e){
        const {name,value}=e.target
        setFormData((prevData)=>{
            return {...prevData,[name]:value}
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        const updatedBlog=blogs.push(formData)
        setBlogs(updatedBlog)
        setFormData({blogTitle:'',blogDescription:''})
        navigate('/')
    }

    return (
        <div className="create-blog-section">
            <h1>Create Blog</h1>
            <form onSubmit={handleSubmit}>
                <div className="blog-form">
                    <label htmlFor="blogTitle">Blog Title</label>
                    <input type="text" id="blogTitle" className="input-blog-title" placeholder="Enter your blog title" onChange={handleChange} value={formData.blogTitle} name="blogTitle"/>

                    <label htmlFor="blogContent">Blog Content</label>
                    <textarea id="blogContent" rows='8' cols='50' placeholder="Write your blog content here" onChange={handleChange} value={formData.blogDescription} name="blogDescription"></textarea>

                    <button type="submit">Post Blog</button>
                </div>
            </form>
        </div>
    );
}

export default CreatePost;
