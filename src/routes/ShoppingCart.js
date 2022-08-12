import { useEffect } from 'react';
import CartItem from '../components/CartItem'
import "../styles/ShoppingCart.css"

const ShoppingCart = ({ total, shopItems, addShopItem, decrementShopItem, getTotal }) => {
    
    let chosenItems = shopItems.filter(item => item.qty > 0);
    
    useEffect(() => {
        console.log('Chosen items: ', chosenItems);
    }, [chosenItems])

    useEffect(() => {
        getTotal(shopItems);
      
      }, [getTotal, shopItems])

    return (
        <div className="container">
            <div className="main">
                {chosenItems.length ? chosenItems.map((item) => {
                                    return <div key={item.id} id={item.id} className='item'>
                                                <CartItem name={item.name}
                                                        qty={item.qty}
                                                        price={item.price}
                                                        total={total} />
                                            </div>
                                })
                            : <p>Your cart is empty</p>
                }
            </div>
        </div>
        
    );
};

export default ShoppingCart;