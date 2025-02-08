/*
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
*/


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';
import UpdatePost from './pages/UpdatePost'; // Import the UpdatePost component
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/update-post/:id" element={<UpdatePost />} /> // Add the route for updating posts
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

