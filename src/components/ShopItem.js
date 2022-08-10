import '../styles/ShopItem.css';

const ShopItem = ({ name, id, qty, price, addItem }) => {
    return (
        <div className="ShopItem" id={id}>
            <img src={require('../1.png')} alt='' />
            <p>{name}</p>
            <p>{qty}</p>
            <p>${price.toFixed(2)}</p>
            <button onClick={addItem}>Add</button>
        </div>
    );
};

export default ShopItem;