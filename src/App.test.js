import { render, userEvent, screen } from '@testing-library/react';
import { getTotal } from './App';

describe('Get Total', () => {

    const input = [
        { qty: 3, price: 4.00 },
    ];

    it('knows that 2 + 2 is 4', () => {
        expect(2+2).toBe(4);
    });
    it('Adds total up correctly', () => {
        expect(getTotal(input)).toEqual(12);
    });
});