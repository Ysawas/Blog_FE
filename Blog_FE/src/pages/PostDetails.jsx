import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post details', error);
      });
  }, [id]);

  const handleUpdate = () => {
    navigate(`/update-post/${id}`, { state: { post } });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Failed to delete post', error);
      });
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-details">
      <h1>{post.title}</h1>
      {post.cover && (
        <img src={post.cover} alt={post.title} className="post-image" />
      )}
      <div className="post-body">
        <p>{post.content}</p>
        <button onClick={handleUpdate} className="post-button">Update Post</button>
        <button onClick={handleDelete} className="post-button">Delete Post</button>
      </div>
    </div>
  );
}

export default PostDetails;


