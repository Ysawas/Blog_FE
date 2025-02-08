import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '10px 20px', textAlign: 'center' }}>
      <h1>Blog Title</h1>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/create">Create Post</Link>
      </nav>
    </header>
  );
}

export default Header;
