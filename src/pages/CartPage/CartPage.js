import React, {useEffect, useState} from "react";
import styles from "./CartPage.module.css";

const CartPage = () => {
    const [productsFromStorage, setProductsFromStorage] = useState([]);

    const getProductsFromStorage = () => {
        let storageData = parseProducts();
        storageData = Object.values(storageData);
        setProductsFromStorage(storageData);
    }

    const deleteProduct = (product) => {
        let productsFromStorage = parseProducts();
        delete productsFromStorage[product.id];
        addStorage('cart', JSON.stringify(productsFromStorage));
        getProductsFromStorage();
    }

    const increaseProduct = (product) => {
        if(!product.quantity){
            product.quantity = 2;
        } else {
            let count = product.quantity;
            product.quantity = ++count;
        }
        let productsFromStorage = parseProducts();
        productsFromStorage[product.id] = product;
        addStorage('cart', JSON.stringify(productsFromStorage));
        getProductsFromStorage();
    }

    const decreaseProduct = (product) => {
        if(!product.quantity){
            deleteProduct(product);
        } else {
            let count = product.quantity;
            product.quantity = --count;

            //
            if(product.quantity === 0){
                deleteProduct(product);
                return;
            }

            let productsFromStorage = parseProducts();
            productsFromStorage[product.id] = product;
            addStorage('cart', JSON.stringify(productsFromStorage));
            getProductsFromStorage();
        }
    }

    const parseProducts = () => JSON.parse(localStorage.getItem('cart'));

    const addStorage = (key, data) => localStorage.setItem(key, data);


    useEffect(getProductsFromStorage, []);

    return (
        <div className="wrapper">
            <h1>Корзина</h1>
            <div className={styles.product_table}>
                <table>
                    <tbody>
                    <tr>
                        <th>#</th>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                        <th>&nbsp;</th>
                    </tr>
                    {
                        productsFromStorage.map((product, idx) => {
                            return (
                                <tr key={idx} className={styles.items}>
                                    <td>&nbsp;</td>
                                    <td><img className={styles.card_img} src={product.img} alt=""/></td>
                                    <td>{product.name}</td>
                                    <td>{product.price} сом</td>
                                    <td>
                                        <div className={styles.countBox}>
                                            <button
                                                className={styles.inc}
                                                onClick={() => {
                                                    increaseProduct(product)
                                                }}
                                            >+</button>
                                            <span>{product.quantity ? product.quantity : 1}</span>
                                            <button
                                                className={styles.dec}
                                                onClick={() => {
                                                    decreaseProduct(product)
                                                }}
                                            >-</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            deleteProduct(product)
                                        }}>
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartPage;