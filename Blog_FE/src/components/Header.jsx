/*
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '10px 20px', textAlign: 'center' }}>
      <h1>Free Bolgging for Everyone</h1>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/create">Create Post</Link>
      </nav>
    </header>
  );
}

export default Header;
*/

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header 
      style={{
        background: 'linear-gradient(45deg, #ff9a9e, #fad0c4)', // warm, cheerful gradient
        padding: '20px 30px',
        textAlign: 'center',
        color: '#333',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}
    >
      <h1 style={{ margin: '0', fontSize: '2.8rem', fontWeight: '700' }}>
        Free Blogging for Everyone
      </h1>
      <nav style={{ marginTop: '12px' }}>
        <Link 
          to="/" 
          style={{
            marginRight: '15px',
            color: '#333',
            textDecoration: 'none',
            fontSize: '1.1rem'
          }}
        >
          Home
        </Link>
        <Link 
          to="/create" 
          style={{
            color: '#333',
            textDecoration: 'none',
            fontSize: '1.1rem'
          }}
        >
          Create Post
        </Link>
      </nav>
    </header>
  );
}

export default Header;

