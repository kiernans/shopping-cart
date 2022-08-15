import '../styles/ShopItem.css';

const ShopItem = ({ name, id, qty, price }) => {

    return (
        <div className="ShopItem" id={id}>
            <div className='item-title'>
                {name}
            </div>
            <img className='item-image' src={require('../1.png')} alt='' />
            <p>{qty}</p>
            <div className='item-price'>
                ${price.toFixed(2)}
            </div>
            <button className='add-item' id={id}>Add</button>
            <button className='remove-item' id={id}>Remove</button>
        </div>
    );
};

export default ShopItem;