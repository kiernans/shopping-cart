import '../styles/CartItem.css'

const CartItem = ({ name, id, qty, price, total }) => {
    
    return (
        <>
            <div className="CartItem" id={id}>
                <p>{name}</p>
                <p>{qty}</p>
                <p>${price.toFixed(2)}</p>
            </div>
           <div className='total'>
                <p>{total.toFixed(2)}</p>
            </div> 
        </>
        
    );
};

export default CartItem;