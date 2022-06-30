import React from "react";
import styles from "./AddButton.module.css";

const AddButton = (props) => {
    return (
        <button
            onClick={props.addCart}
            className={styles.card_button}
        >В корзину</button>
    )
}

export default AddButton;