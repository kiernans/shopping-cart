import React from "react";
import "../styles/Shop.css"

const Shop = ({ shopItems, addItem }) => {
    return (
        <div className="container">
            <div className="main">
                <h1>Shop</h1>
                <button onClick={addItem} id='1'>Add Item</button> 
            </div>
        </div>
    );
};

export default Shop;