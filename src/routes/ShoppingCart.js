import { useEffect } from 'react';
import CartItem from '../components/CartItem'
import "../styles/ShoppingCart.css"

const ShoppingCart = ({ total, shopItems, addShopItem, decrementShopItem, getTotal }) => {
    
    let chosenItems = shopItems.filter(item => item.qty > 0);
    
    useEffect(() => {
        const addButtons = document.querySelectorAll('.add-item');
        const removeButtons = document.querySelectorAll('.remove-item');
        addButtons.forEach(button => {
            button.addEventListener('click', addShopItem);
        });
        removeButtons.forEach(button => {
            button.addEventListener('click', decrementShopItem);
        });
        

        return () => {
            addButtons.forEach(button => {
                button.removeEventListener('click', addShopItem);
            })
            removeButtons.forEach(button => {
                button.removeEventListener('click', decrementShopItem);
            })
        };
    }, [addShopItem, decrementShopItem]);

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
                                                        id={item.id}/>
                                            </div>
                                })
                            : <p>Your cart is empty</p>
                }
            </div>
            <div className='total'>
                {chosenItems.length ? <p>{total.toFixed(2)}</p> : ''}
            </div> 
        </div>
        
    );
};

export default ShoppingCart;