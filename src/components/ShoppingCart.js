import React from "react";
import "../styles/ShoppingCart.css"
import Navbar from "./Navbar";

const ShoppingCart = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="main">
                <h1>Shopping Cart</h1> 
            </div>
        </div>
        
    );
};

export default ShoppingCart;