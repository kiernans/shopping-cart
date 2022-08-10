import React from "react";
import "../styles/Shop.css"
import ShopItem from "./ShopItem";

const Shop = ({ shopItems, addItem, removeItem }) => {
    return (
        <div className="container">
            <div className="main">
                {
                    shopItems.map((item) => {
                        return <div key={item.id} id={item.id} className='item'>
                            <ShopItem name={item.name}
                                      id={item.id}
                                      qty={item.qty}
                                      price={item.price} />
                        </div>
                    })
                }
            </div>
        </div >
    );
};

export default Shop;