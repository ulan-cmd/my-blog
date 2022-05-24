import React, {useEffect, useState} from "react";
import styles from "./Main.module.css";

const color = {
    1:'b-red',
    2:'b-pink',
    3:'b-blue',
    4:'b-green',
    5:'b-yellow'
}

const userCard = () => {

}

const Main = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/photos';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUserData(data)
            })
    },[]);


    return (
        <div className={styles.container}>
            {
                userData.map((item, index) => {
                    return (
                        <div key={index} className={`${styles.card} ${color[item.albmId]}`}>
                            <p>{item.name}</p>
                            <p>{item.username}</p>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                            <p>{item.company.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main;