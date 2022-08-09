import React from "react";
import "../styles/Navbar.css"
const Navbar = () => {
    return (
        <div className="Navbar">
            <a href="/">
                <h1 className="title">My Store</h1>
            </a>
            <div className="nav-items">
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/cart">Cart</a>
            </div>
        </div>
    );
    
};

export default Navbar;