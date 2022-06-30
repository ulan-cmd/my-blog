import React from 'react';
import styles from './Product.module.css';
import AddButton from "../AddButton/AddButton";

const Product = (props) => {

    const addCart = () => {
        let productsFromLocalStorage = {};
        const product = {};

        if (localStorage.getItem('cart')){
            productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
        }

        product[props.id] = {
            ...props
        }

        localStorage.setItem('cart', JSON.stringify({...productsFromLocalStorage, ...product}));
    }

    return (
        <div className={styles.card}>
            <img src={props.img} alt="" className={styles.card_img} />
            <h4 className={styles.name}>{props.name}</h4>
            <p className={styles.price}>$ {props.price}</p>
            <AddButton
                addCart={addCart}
            />
        </div>
    );
};

export default Product;