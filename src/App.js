import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import ShoppingCart from './components/ShoppingCart';
import { getTotal, getItem, incrementQuantity } from './helpers/ShopHelper';

const App = () => {

    const initialShop = [
        {
            id: '1',
            name: "1",
            qty: 0,
            price: 1.00
        },
        {
            id: '2',
            name: "2",
            qty: 0,
            price: 2.00
        },
        {
            id: '3',
            name: "3",
            qty: 0,
            price: 3.00
        },
        {
            id: '4',
            name: "4",
            qty: 0,
            price: 4.00
        },
        {
            id: '5',
            name: "5",
            qty: 0,
            price: 5.00
        },
        {
            id: '6',
            name: "6",
            qty: 0,
            price: 6.00
        },
    ];

    const [ shopItems, setShopItems ] = useState(initialShop);
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        console.log(shopItems);
    }, [shopItems])

    const addItem = (e) => {
        setShopItems(incrementQuantity(shopItems, e.target.id));
    };

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="" element={<Homepage />} />
                <Route path="shop" element={<Shop shopItems={shopItems} addItem={addItem}/>} />
                <Route path="cart" element={<ShoppingCart total={total} />} />
                <Route path="*" element={<p>There's nothing here!</p>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;