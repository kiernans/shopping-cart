
export const getTotal = (shopItems) => {
    const chosenItems = shopItems.filter((item) => item.qty > 0);
    return chosenItems.reduce((prev, curr) => prev + curr.qty * curr.price, 0);
};

export const getItem = (shopItems, id) => {
    return shopItems.filter((item) => item.id === id)[0];
};

export const removeItem = (shopItems, id) => {
    return shopItems.filter((item) => item.id !== id);
};

export const incrementQuantity = (shopItems, id) => {
    let myItem = getItem(shopItems, id);
    myItem.qty += 1;
    let newShopItems = removeItem(shopItems, id);
    return [...newShopItems, myItem].sort((a,b) => a.id.localeCompare(b.id));
};

export const decrementQuantity = (shopItems, id) => {
    let myItem = getItem(shopItems, id);
    if(myItem.qty > 0) {
       myItem.qty -= 1; 
    }
    let newShopItems = removeItem(shopItems, id);
    return [...newShopItems, myItem].sort((a,b) => a.id.localeCompare(b.id));
};