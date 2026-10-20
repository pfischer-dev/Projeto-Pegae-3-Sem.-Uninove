import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "../pages/Register";
import Login from '../pages/Login';
import Home from '../pages/Home';
//import Restaurant from '../pages/Restaurant';
//import ProductDetail from '../pages/ProductDetail';
//import Cart from '../pages/Cart';
//import Payment from '../pages/Payment';
//import QRCodePickup from '../pages/QRCodePickup';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} /> {/* troque depois por home */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/restaurante/:id" element={<Restaurant />} /> */}
        {/* <Route path="/produto/:id" element={<ProductDetail />} /> */}
        {/* <Route path="/carrinho" element={<Cart />} /> */}
        {/* <Route path="/pagamento" element={<Payment />} /> */}
        {/* <Route path="/pedido/:id/retirada" element={<QRCodePickup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}