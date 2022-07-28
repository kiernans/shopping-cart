import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import ShoppingCart from './components/ShoppingCart';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Homepage />} />
                <Route path="shop" element={<Shop />} />
                <Route path="cart" element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;