import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './routes/Homepage';
import Navbar from './components/Navbar';
import Shop from './routes/Shop';
import ShoppingCart from './routes/ShoppingCart';
import useShopHelper from './helpers/useShopHelper';

const App = () => {

    const { shopItems, total, addShopItem, decrementShopItem, getTotal } = useShopHelper();

    useEffect(() => {
        console.log(shopItems);
    }, [shopItems])

    return (
        <>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path="" element={<Homepage />} />
                <Route path="shop" element={<Shop shopItems={shopItems} 
                                                    addShopItem={addShopItem} 
                                                    decrementShopItem={decrementShopItem}/>} />
                <Route path="cart" element={<ShoppingCart total={total} 
                                                            shopItems={shopItems} 
                                                            addShopItem={addShopItem} 
                                                            decrementShopItem={decrementShopItem}
                                                            getTotal={getTotal}/>} />
                <Route path="*" element={<p>There's nothing here!</p>} />
            </Routes>
        </div>
        
        </>
        
    );
};

export default App;