import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster  } from 'react-hot-toast';
import "./App.css";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
            <Toaster/>
        </BrowserRouter>
    )
}

export default App;
