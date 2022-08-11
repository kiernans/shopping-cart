import { renderHook, act } from '@testing-library/react';
import useShopHelper from './helpers/useShopHelper';

describe('useShopHelper', () => {
    it('checking default state', () => {
        const { result } = renderHook(() => useShopHelper())

        expect(result.current.shopItems).toBe(result.current.initialShop);
        expect(result.current.addShopItem).toBeInstanceOf(Function);
        expect(result.current.decrementShopItem).toBeInstanceOf(Function);
    })

    it('')
})