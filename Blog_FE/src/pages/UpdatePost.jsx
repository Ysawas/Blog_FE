import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdatePost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState(location.state?.post || {});

    useEffect(() => {
        if (!formData.title) { // If the post isn't passed through state, fetch it
            axios.get(`http://localhost:3000/posts/${id}`)
                .then(response => setFormData(response.data))
                .catch(error => console.log('Fetch error:', error));
        }
    }, [id, formData.title]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/posts/${id}`, formData)
            .then(() => navigate(`/posts/${id}`))
            .catch(error => console.error('Update error:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </label>
            <label>
                Content:
                <textarea name="content" value={formData.content} onChange={handleChange} required />
            </label>
            <label>
                Author:
                <input type="text" name="author" value={formData.author} onChange={handleChange} required />
            </label>
            <label>
                Cover URL:
                <input type="text" name="cover" value={formData.cover} onChange={handleChange} />
            </label>
            <button type="submit">Update Post</button>
        </form>
    );
}

export default UpdatePost;
