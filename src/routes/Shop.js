import React, { useEffect } from "react";
import "../styles/Shop.css"
import ShopItem from '../components/ShopItem';

const Shop = ({ shopItems, addShopItem, decrementShopItem }) => {

    useEffect(() => {
        const addButtons = document.querySelectorAll('.add-item');
        const removeButtons = document.querySelectorAll('.remove-item');
        addButtons.forEach(button => {
            button.addEventListener('click', addShopItem);
        });
        removeButtons.forEach(button => {
            button.addEventListener('click', decrementShopItem);
        });
        

        return () => {
            addButtons.forEach(button => {
                button.removeEventListener('click', addShopItem);
            })
            removeButtons.forEach(button => {
                button.removeEventListener('click', decrementShopItem);
            })
        };
    }, [addShopItem, decrementShopItem]);

    return (
        <div className="container">
            <div className="Shop">
                {
                    shopItems.map((item) => {
                        return <div key={item.id} id={item.id} className='ShopItem'>
                            <ShopItem name={item.name}
                                      id={item.id}
                                      qty={item.qty}
                                      price={item.price}
                                      image={item.image} />
                        </div>
                    })
                }
            </div>
        </div >
    );
};

export default Shop;