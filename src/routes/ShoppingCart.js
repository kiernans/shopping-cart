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
        <>
            <div className="Cart">
                {chosenItems.length ? chosenItems.map((item) => {
                                    return <div key={item.id} id={item.id} className='CartItem'>
                                                <CartItem name={item.name}
                                                        qty={item.qty}
                                                        price={item.price} 
                                                        id={item.id}
                                                        image={item.image}/>
                                            </div>
                                })
                            : <p>Your cart is empty</p>
                }
                {chosenItems.length ? <div className='total'>
                    <strong>Total</strong>
                    &emsp;&emsp;&emsp;&emsp;
                    {total.toFixed(2)}
                </div>
                : ''}
            </div>
        </>
        
    );
};

export default ShoppingCart;