import React from 'react';
import {useEffect, useState} from "react";


const Profile = ({login, exit}) => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${Math.random()*10}&_limit=10`)
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])
    
    return (
        <div>
            <h1>Ваш логин&nbsp;&nbsp;{login}</h1>
            <h3>Ваши посты:</h3>
            {posts && posts.map(post =>
                <div key={post.id} style={{textAlign: 'left', marginLeft: '20%'}}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <button style={{marginTop: 10}} onClick={() => {console.error('Это тоже баг')}}>Просмотреть</button>
                </div>
            )}
            <button style={{position: 'fixed', top: '90%', right: '10%', background: 'blue'}} onClick={() => {exit(false)}}>exit</button>
        </div>
    );
};

export default Profile;