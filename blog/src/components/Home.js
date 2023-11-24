import React from "react";
import BlogPost from "./BlogPost";
import blogData from '../blogData';

function Home(){
    return(
        <div className="posts">     
            {blogData.map((blog)=>{
                return <BlogPost blogTitle={blog.blogTitle} blogDescription={blog.blogDescription} blogId={blog.blogId}/>
            })}
        </div>
    )
}



export default Home