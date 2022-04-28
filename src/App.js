import React from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {Main, About, Products, Contacts, Post, NotFound} from "./Pages";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink className={(object) => object.isActive ? 'active-link' : ''} to="/">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink className={(object) => object.isActive ? 'active-link' : ''} to="/products">Продукты</NavLink>
                    </li>
                    <li>
                        <NavLink className={(object) => object.isActive ? 'active-link' : ''} to="/about">О нас</NavLink>
                    </li>
                    <li>
                        <NavLink className={(object) => object.isActive ? 'active-link' : ''} to="/contacts">Контакты</NavLink>
                    </li>
                    <li>
                        <NavLink className={(object) => object.isActive ? 'active-link' : ''} to="/post/165">Пост</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/post/:id" element={<Post/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
