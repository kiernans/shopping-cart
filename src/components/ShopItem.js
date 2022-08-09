import '../styles/ShopItem.css';

const ShopItem = ({ name, id, qty, price, addItem }) => {
    return (
        <div className="ShopItem" id={id}>
            <img src={require('../1.png')} />
            <p>{name}</p>
            <p>{qty}</p>
            <p>{price}</p>
        </div>
    );
};

export default ShopItem;