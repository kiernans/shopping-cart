import { useState } from "react";

const useShopHelper = () => {

    const initialShop = [
        { id: '1', name: 'A Beautiful Coast', qty: 0, price: 1.00, image: require('../assets/antoine-beauvillain-qrPqGP-SG8w-unsplash.jpg') },
        { id: '2', name: 'A Pretty Lake', qty: 0, price: 2.00, image: require('../assets/clement-fusil-Fpqx6GGXfXs-unsplash.jpg') },
        { id: '3', name: 'A Pier at Night', qty: 0, price: 3.00, image: require('../assets/james-wheeler-InOgamK2cuY-unsplash.jpg') },
        { id: '4', name: 'A Boat on a Lake', qty: 0, price: 4.00, image: require('../assets/luca-bravo-O453M2Liufs-unsplash.jpg') },
        { id: '5', name: 'A Snowy Mountain', qty: 0, price: 5.00, image: require('../assets/luis-poletti-th4bqV0PQpI-unsplash.jpg') },
        { id: '6', name: 'An Autumn Trail', qty: 0, price: 6.99, image: require('../assets/toni-lluch-JoRoy500nCc-unsplash.jpg') },
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
        setShopItems(incrementQuantity(shopItems, e.target.name));
    };
    
    const decrementShopItem = (e) => {
        setShopItems(decrementQuantity(shopItems, e.target.name));
    };

    const getTotal = (shopItems) => {
        const chosenItems = shopItems.filter((item) => item.qty > 0);
        const total = chosenItems.reduce((prev, curr) => prev + curr.qty * curr.price, 0);
        setTotal(total);
    };


    return { initialShop, shopItems, total, addShopItem, decrementShopItem, getTotal };
}

export default useShopHelper;