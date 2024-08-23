import React, { useState } from 'react';
import axios from 'axios';

const NewPost = ({ history }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [loading,setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !content) {
            setError('Both title and content are required');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/posts`, { title, content });
            history.push('/');
        } catch (err) {
            setError('An error occurred while adding the post');
        } finally{
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Create a New Post</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={loading}
                    />
                </div>
                <div>
                    <label>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        disabled={loading}
                    />
                </div>
                <button type="submit" disabled={loading}>{loading?'Adding..':'Add Post'}</button>
            </form>
        </div>
    );
};

export default NewPost;
