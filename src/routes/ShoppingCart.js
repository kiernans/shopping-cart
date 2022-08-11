import CartItem from '../components/CartItem'
import "../styles/ShoppingCart.css"

const ShoppingCart = ({ total, shopItems, addShopItem, decrementShopItem }) => {
    
    let chosenItems = shopItems.filter(item => item.qty > 0);

    return (
        <div className="container">
            <div className="main">
                {chosenItems ? chosenItems.map((item) => {
                                    return <div key={item.id} id={item.id} className='item'>
                                                <CartItem name={item.name}
                                                        qty={item.qty}
                                                        price={item.price} />
                                            </div>
                                })
                            : <p>Your cart is empty</p>
                }
            </div>
        </div>
        
    );
};

export default ShoppingCart;