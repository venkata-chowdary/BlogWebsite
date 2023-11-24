import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/login.css'


function Login(){

    const [formData,setFormData]=useState({
        username:'',
        password:''
    })

    function handleChange(e){
        const {name,value}=e.target
        setFormData((prevData)=>{
            return {...prevData,[name]:value}
        })
        console.log(formData)

    }
    return(
        <div className="auth-form">
            <h3>Login form</h3>
            <form>
                <input type="email" placeholder="Enter Email" name="username" value={formData.username} onChange={handleChange}/>
                <input type="password" placeholder="Enter Email" name="password" value={formData.password} onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>

            <p>Don't have an Account?
            <Link to='/signup'>Sign Up</Link>
            </p>
        </div>
    )
}

export default Login