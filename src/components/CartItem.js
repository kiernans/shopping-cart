import '../styles/CartItem.css'

const CartItem = ({ name, id, qty, price }) => {
    
    return (
        <>
            <div className="CartItem" id={id}>
                <p>{name}</p>
                <p>{qty}</p>
                <p>${price.toFixed(2)}</p>
                <button className='add-item' name={id}>Add</button>
                <button className='remove-item' name={id}>Remove</button>
            </div>
        </>
        
    );
};

export default CartItem;