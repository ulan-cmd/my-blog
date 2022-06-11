import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/ProductPage/ProductPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
