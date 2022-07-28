import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shopping from './components/Shopping';
import ShoppingCart from './components/ShoppingCart';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Homepage />} />
                <Route path="shop" element={<Shopping />} />
                <Route path="cart" element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;