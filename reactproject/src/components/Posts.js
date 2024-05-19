// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                // const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
                // const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
                // const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setPosts(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading posts: {error.message}</p>;

    return (
        <div className="posts-container">
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Posts;
