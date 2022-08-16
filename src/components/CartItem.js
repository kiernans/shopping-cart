import '../styles/CartItem.css'

const CartItem = ({ name, id, qty, price, image }) => {
    
    return (
        <>
            <img className='item-image' src={image} alt='' />
            <p>{name}</p>
            <p>{qty}</p>
            <p>${price.toFixed(2)}</p>
            <button className='add-item' name={id}>Add</button>
            <button className='remove-item' name={id}>Remove</button>
        </>
        
    );
};

export default CartItem;