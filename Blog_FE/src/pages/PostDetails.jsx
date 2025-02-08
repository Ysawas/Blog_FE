/*
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
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}

export default PostDetails;
*/





/*
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
    navigate(`/update-post/${id}`, { state: { post } }); // Navigate to the Update Post page with post data
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        navigate('/'); // Navigate back to the homepage after deletion
      })
      .catch(error => {
        console.error('Failed to delete post', error);
      });
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      {post.cover && (
        <img src={post.cover} alt={post.title} style={{ width: '100%', height: 'auto' }} />
      )}
      <p>{post.content}</p>
      <button onClick={handleUpdate}>Update Post</button> {/* Update button }
      <button onClick={handleDelete}>Delete Post</button> {/* Delete button }
    </div>
  );
}

export default PostDetails;
*/




/*
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
    navigate(`/update-post/${id}`); // Navigate to the Update Post page
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        navigate('/'); // Navigate back to the home page after deletion
      })
      .catch(error => {
        console.error('Failed to delete post', error);
      });
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      {post.cover && (
        <img src={post.cover} alt={post.title} style={{ width: '100%', height: 'auto' }} />
      )}
      <p>{post.content}</p>
      <button onClick={handleUpdate}>Update Post</button>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}

export default PostDetails;
*/



/*

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/update-post/${id}`);
  };

  const handleDelete = () => {
    alert('Delete functionality not implemented yet.');
  };

  return (
    <div>
      <h1>Post Details</h1>
      <button onClick={handleUpdate}>Update Post</button>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}

export default PostDetails;
*/




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


