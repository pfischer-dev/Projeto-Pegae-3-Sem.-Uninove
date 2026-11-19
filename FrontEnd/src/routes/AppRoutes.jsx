import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "../pages/Register";
import Login from '../pages/Login';
import Home from '../pages/Home';
import Restaurant from '../pages/Restaurant';
//import ProductDetail from '../pages/ProductDetail';
import ShopBag from '../pages/ShopBag';
import Payment from '../pages/Payment';
import QRCodePickup from '../pages/QRCodePickup';
import Profile from '../pages/Profile';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        {/* <Route path="/produto/:id" element={<ProductDetail />} /> */}
        <Route path="/shopbag" element={<ShopBag />} />
        <Route path="/payment" element={<Payment />} />
        
        <Route path="/orders" element={<QRCodePickup />} />
        {/* <Route path="/orders/:id/retirada" element={<QRCodePickup />} /> */}

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}