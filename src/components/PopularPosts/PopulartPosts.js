import React, {useEffect, useState} from "react";
import {BASE_URL} from "../../contstants";

const PopularPosts = () => {
    const [popularPosts, setPopularPosts] = useState([]);

    const getPopularPosts = () => {
        const url = BASE_URL + '/posts?is_popular=1';

        fetch(url)
            .then(response => response.json())
            .then(data => setPopularPosts(data))
    }

    useEffect(getPopularPosts, []);


    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {
                        popularPosts.map(item => (
                            <li className="w3-padding-16">
                                <img src={item.img_url} alt="Image"
                                     className="w3-left w3-margin-right" style={{width: '82px'}}/>
                                <span className="w3-large">{item.title}</span><br/>
                                <span>{item.created_date}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <hr/>
        </>
    )
}

export default PopularPosts;