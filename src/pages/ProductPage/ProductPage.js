import React, {useEffect, useState} from 'react';
import {BASE_URL} from "../../contstants";
import Product from "../../components/Product/Product";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const url = BASE_URL + '/products';

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    useEffect(getProducts, []);

    return (
        <div className={styles.wrapper}>
            {
                products.map((item) => {
                    return (
                        <Product
                            key={item.id}
                            img={item.image_url}
                            name={item.name}
                            price={item.price}
                            id={item.id}
                        />
                    )
                })
            }
        </div>
    );
};

export default ProductPage;


// css module