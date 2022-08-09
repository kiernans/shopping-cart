import { getTotal, getItem, removeItem, incrementQuantity } from './helpers/cart';

const initialShop = [
    { id: '1', name: '1', qty: 1, price: 1.00 },
    { id: '2', name: '2', qty: 4, price: 2.00 },
    { id: '3', name: '3', qty: 0, price: 3.00 },
    { id: '4', name: '4', qty: 0, price: 4.00 },
    { id: '5', name: '5', qty: 0, price: 5.00 },
    { id: '6', name: '6', qty: 2, price: 6.99 },
];

describe('Get Total', () => {
    it('knows that 2 + 2 is 4', () => {
        expect(2+2).toBe(4);
    });
    it('Adds total of multiple items', () => {
        expect(getTotal(initialShop)).toEqual(22.98);
    });
});

describe('Get Item', () => {
    it('Returns the correct item', () => {
        expect(getItem(initialShop, '1')).toEqual({id: '1', name: '1', qty: 1, price: 1.00});
    });
});

describe('Remove Item', () => {
    it('Removes correct item', () => {
        const result = [
            { id: '1', name: '1', qty: 1, price: 1.00 },
            { id: '3', name: '3', qty: 0, price: 3.00 },
            { id: '4', name: '4', qty: 0, price: 4.00 },
            { id: '5', name: '5', qty: 0, price: 5.00 },
            { id: '6', name: '6', qty: 2, price: 6.99 },
        ];
        expect(removeItem(initialShop, '2')).toEqual(result);
    });
});

describe('Increment Quantity', () => {
    it('Adds item', () => {
        const result = [
            { id: '1', name: '1', qty: 2, price: 1.00 },
            { id: '2', name: '2', qty: 4, price: 2.00 },
            { id: '3', name: '3', qty: 0, price: 3.00 },
            { id: '4', name: '4', qty: 0, price: 4.00 },
            { id: '5', name: '5', qty: 0, price: 5.00 },
            { id: '6', name: '6', qty: 2, price: 6.99 },
        ];

        expect(incrementQuantity(initialShop, '1')).toEqual(result);
    });
});