import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {BASE_URL} from "../../contstants";
import Product from "../../components/Product/Product";
import styles from "./ProductPage.module.css";
import toast from "react-hot-toast";

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const url = BASE_URL + '/products1';

        fetch(url)
            .then(response => {
                if (response.status === 200){
                    return response.json();
                } else{
                    throw new Error(response.status);
                }
            })
            .then(data => setProducts(data))
            .catch(err => toast.error(`Ошибка. Статус ошибки: ${err.message}`))
    }

    useEffect(getProducts, []);

    return (
        <div className={styles.wrapper}>
           <Link to="/cart">Корзина</Link>
            {
                products.length > 0 ? products.map((item) => {
                    return (
                        <Product
                            key={item.id}
                            img={item.image_url}
                            name={item.name}
                            price={item.price}
                            id={item.id}
                        />
                    )
                }) : null
            }
        </div>
    );
};

export default ProductPage;


// css module