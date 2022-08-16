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
            <button className='add-item'name={id}>Add to cart</button>
        </>
    );
};

export default ShopItem;