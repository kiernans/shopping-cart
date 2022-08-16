import '../styles/ShopItem.css';

const ShopItem = ({ name, id, qty, price, image }) => {

    return (
        <>
            <img className='item-image' src={image} alt='' />
            <div className='item-title'>
                {name}
            </div>
            <p>{qty}</p>
            <div className='item-price'>
                ${price.toFixed(2)}
            </div>
            <button className='remove-item' name={id}>-</button>
            <button className='add-item'name={id}>+</button>
        </>
    );
};

export default ShopItem;