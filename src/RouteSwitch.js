import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Shopping from './Shopping';
import ShoppingCart from './ShoppingCart';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Homepage />} />
                <Route path="shopping" element={<Shopping />} />
                <Route path="cart" element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;