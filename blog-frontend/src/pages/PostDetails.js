import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts/${id}`);
                setPost(response.data);
            } catch(err){
                setError('Failed to load post');
            } finally{
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if(loading) return <p>Loading post...</p>;
    if(error) return <p>{error}</p>;
    if (!post) return <p>Post not found</p>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetail;
