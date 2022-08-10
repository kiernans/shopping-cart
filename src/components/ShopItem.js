import { useEffect } from 'react';
import '../styles/ShopItem.css';

const ShopItem = ({ name, id, qty, price, addItem }) => {

    return (
        <div className="ShopItem" id={id}>
            <img src={require('../1.png')} alt='' />
            <p>{name}</p>
            <p>{qty}</p>
            <p>${price.toFixed(2)}</p>
            <button className='add-item' id={id}>Add</button>
            <button className='remove-item' id={id}>Remove</button>
        </div>
    );
};

export default ShopItem;