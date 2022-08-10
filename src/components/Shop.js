import React, { useEffect } from "react";
import "../styles/Shop.css"
import ShopItem from "./ShopItem";

const Shop = ({ shopItems, addItem, removeItem }) => {

    useEffect(() => {
        const addButtons = document.querySelectorAll('.add-item');
        const removeButtons = document.querySelectorAll('.remove-item');
        addButtons.forEach(button => {
            button.addEventListener('click', addItem);
        });
        removeButtons.forEach(button => {
            button.addEventListener('click', removeItem);
        });
        

        return () => {
            addButtons.forEach(button => {
                button.removeEventListener('click', addItem);
            })
            removeButtons.forEach(button => {
                button.removeEventListener('click', removeItem);
            })
        };
    }, [addItem, removeItem]);

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