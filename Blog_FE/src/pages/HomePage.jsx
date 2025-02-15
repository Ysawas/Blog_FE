import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css'; // Make sure your styles are correctly imported

function HomePage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts', error);
      });
  }, []);

  return (
    <div>
      <h1>Home Page of Free Blogging</h1>
      <h2 className="our-post-title">Our Posts</h2>
      <div className="posts-grid">
        {posts.map(post => (
          <div className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            {post.cover && (
              <img
                src={post.cover}
                alt={post.title}
                className="post-image"
                onClick={() => navigate(`/posts/${post.id}`)}
              />
            )}
            <div className="post-content">
              <p>By {post.author}</p>
              <p>{post.content.substring(0, 100)}...</p>
              <Link to={`/posts/${post.id}`} className="post-link">Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
