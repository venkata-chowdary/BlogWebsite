import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/login.css'


function Signup(){

    const [formData,setFormData]=useState({
        username:'',
        password:''
    })

    function handleChange(e){
        const {name,value}=e.target
        setFormData((prevData)=>{
            return {...prevData,[name]:value}
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
    }
    return(
        <div className="auth-form">
            <h3>Signup form</h3>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter Email" name="username"  onChange={handleChange} value={formData.username} />
                <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={formData.password} />
                <button type="submit">Signup</button>
            </form>

            <p>Already had an account?
            <Link to='/login'>Log In</Link>
            </p>
        </div>
    )
}

export default Signup