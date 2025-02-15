import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(45deg, #2575fc, #6a11cb)',
        padding: '15px 20px',
        textAlign: 'center',
        color: '#fff',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.2)',
      }}
    >
      <p style={{ margin: '0', fontSize: '1rem' }}>
        © 2025 Happy Blog. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

