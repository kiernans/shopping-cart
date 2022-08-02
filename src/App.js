import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Homepage />} />
                <Route path="shop" element={<Shop />} />
                <Route path="cart" element={<ShoppingCart />} />
                <Route path="*" element={<p>There's nothing here!</p>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;