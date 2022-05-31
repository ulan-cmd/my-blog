import React, {useEffect, useState} from "react";
import BlogEntry from "../BlogEntry/BlogEntry";
import {BASE_URL} from "../../contstants";

const BlogEntries = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        fetch(BASE_URL+'/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }

    useEffect(getPosts, [])

    return (
        <div className="w3-col l8 s12">
            {
                posts.map((item) => {
                    return (
                        <BlogEntry
                            imgUrl={item.img_url}
                            title={item.title}
                            tags={item.tags}
                            date={item.created_date}
                            desc={item.desc}
                            countComments={item.count_comments}
                        />
                    )
                })
            }
        </div>
    )
}

export default BlogEntries;