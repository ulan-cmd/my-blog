import React from 'react';
import styles from './Product.module.css';

const Product = (props) => {

    const addCart = () => {
        localStorage.setItem('cart', JSON.stringify(props));
    }

    return (
        <div className={styles.card}>
            <img src={props.img} alt="" className={styles.card_img} />
            <h4 className={styles.name}>{props.name}</h4>
            <p className={styles.price}>$ {props.price}</p>
            <button
                onClick={addCart}
                className={styles.card_button}
            >Купить</button>
        </div>
    );
};

export default Product;