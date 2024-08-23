import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {//not working api
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts`);
                setPosts(response.data);
            } catch (err) {
                setError('Failed to load posts');
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if(loading) return <p>Loading posts...</p>;
    if(error) return <p>{error}</p>

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <h3>
                            <Link to={`/posts/${post._id}`}>{post.title}</Link>
                        </h3>
                        <p>{post.content.substring(0, 100)}...</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
