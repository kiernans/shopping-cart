import { useState } from "react";

const useShopHelper = () => {

    const initialShop = [
        { id: '1', name: '1', qty: 1, price: 1.00 },
        { id: '2', name: '2', qty: 4, price: 2.00 },
        { id: '3', name: '3', qty: 0, price: 3.00 },
        { id: '4', name: '4', qty: 0, price: 4.00 },
        { id: '5', name: '5', qty: 0, price: 5.00 },
        { id: '6', name: '6', qty: 2, price: 6.99 },
    ];

    const [ shopItems, setShopItems ] = useState(initialShop);
    const [ total, setTotal ] = useState(0);

    const getItem = (shopItems, id) => {
        return shopItems.filter((item) => item.id === id)[0];
    };

    const removeItem = (shopItems, id) => {
        return shopItems.filter((item) => item.id !== id);
    };

    const incrementQuantity = (shopItems, id) => {
        let myItem = getItem(shopItems, id);
        myItem.qty += 1;
        let newShopItems = removeItem(shopItems, id);
        return [...newShopItems, myItem].sort((a,b) => a.id.localeCompare(b.id));
    };

    const decrementQuantity = (shopItems, id) => {
        let myItem = getItem(shopItems, id);
        if(myItem.qty > 0) {
        myItem.qty -= 1; 
        }
        let newShopItems = removeItem(shopItems, id);
        return [...newShopItems, myItem].sort((a,b) => a.id.localeCompare(b.id));
    };

    const addShopItem = (e) => {
        setShopItems(incrementQuantity(shopItems, e.target.id));
    };
    
    const decrementShopItem = (e) => {
        setShopItems(decrementQuantity(shopItems, e.target.id));
    };

    const getTotal = (shopItems) => {
        const chosenItems = shopItems.filter((item) => item.qty > 0);
        return chosenItems.reduce((prev, curr) => prev + curr.qty * curr.price, 0);
    };

    return { initialShop, shopItems, total, addShopItem, decrementShopItem };
}

export default useShopHelper;