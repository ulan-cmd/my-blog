import React from "react";
import {Link, useParams} from "react-router-dom";

export const Main = () => {
    return <h1 className="title">Главная страничка</h1>
}

export const Products = () => {
    return <h1 className="title">Наши продукты</h1>
}

export const About = () => {
    return <h1 className="title">О нас</h1>
}

export const Contacts = () => {
    return <h1 className="title">Контакты</h1>
}

export const Post = () => {
    const params = useParams();
    return <h1 className="title">Пост c ID: {params.id}</h1>
}

export const NotFound = () => {
    return <h1 className="title">Страничка не найдена. <Link to="/">Перейти на главную</Link></h1>
}