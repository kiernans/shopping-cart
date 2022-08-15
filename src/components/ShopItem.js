import '../styles/ShopItem.css';

const ShopItem = ({ name, id, qty, price }) => {

    return (
        <div className="ShopItem" id={id}>
            <div className='item-title'>
                {name}
            </div>
            <img className='item-image' src={require('../1.png')} alt='' />
            <p>{qty}</p>
<<<<<<< HEAD
            <div className='item-price'>
                ${price.toFixed(2)}
            </div>
            <button className='add-item' id={id}>Add</button>
            <button className='remove-item' id={id}>Remove</button>
=======
            <p>${price.toFixed(2)}</p>
            <button className='add-item' name={id}>Add</button>
            <button className='remove-item' name={id}>Remove</button>
>>>>>>> 210b72a277a5a3f9e886dda90451761bb05f31d6
        </div>
    );
};

export default ShopItem;