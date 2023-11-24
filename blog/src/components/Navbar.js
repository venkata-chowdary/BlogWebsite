import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
function Navbar() {
    return (
        <nav>
            <h2><Link to='/'>Home</Link></h2>
            <h2><Link to='/create'>Post Blog</Link></h2>
            <h2><Link to='/login'>Log In</Link></h2>
        </nav>
    )
}

export default Navbar