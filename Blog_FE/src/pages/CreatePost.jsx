/*
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/posts', { title, content })
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Failed to create post', error);
      });
  };

  return ( 
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
      </label>
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePost;
*/
/*
import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const postData = { title, content };
            const response = await axios.post('http://localhost:3000/api/posts', postData);
            console.log('Post created:', response.data);
            // Optionally reset the form or navigate the user to another page
            setTitle('');
            setContent('');
            // If using react-router you might navigate the user to the homepage or to view the post
            // navigate('/');
        } catch (error) {
            console.error('Failed to create post', error.response || error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreatePost;
*/

/*
import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const postData = { title, author, content };
            const response = await axios.post('http://localhost:3000/api/posts', postData);
            console.log('Post created:', response.data);
            // Optionally clear the form fields after submission
            setTitle('');
            setAuthor('');
            setContent('');
        } catch (error) {
            console.error('Failed to create post', error.response || error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Author:</label>
                <input
                    type="text"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreatePost;
*/

/*
import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [cover, setCover] = useState('');  // State for storing the cover image URL

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const postData = { title, author, content, cover };  // Include cover in the data sent to the backend
            const response = await axios.post('http://localhost:3000/posts', postData);
            console.log('Post created:', response.data);
            // Optionally clear the form fields after submission
            setTitle('');
            setAuthor('');
            setContent('');
            setCover('');
        } catch (error) {
            console.error('Failed to create post', error.response || error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Author:</label>
                <input
                    type="text"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Cover URL:</label>
                <input
                    type="text"
                    value={cover}
                    onChange={e => setCover(e.target.value)}
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreatePost;
*/




/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [cover, setCover] = useState('');
    const navigate = useNavigate();

    // Optionally fetch lorem ipsum text on component mount for default content
    useEffect(() => {
        fetchLoremText();
    }, []);

    const fetchLoremText = () => {
        axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=2&format=text')
            .then(response => {
                setContent(response.data);
            })
            .catch(error => {
                console.error('Error fetching lorem ipsum', error);
                setContent('');  // Clear content if API fails
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const postData = { title, author, content, cover };
        try {
            const response = await axios.post('http://localhost:3000/posts', postData);
            console.log('Post created:', response.data);
            navigate('/');  // Navigate to home page after successful creation
        } catch (error) {
            console.error('Failed to create post', error);
            alert('Failed to create post. Check console for more details.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Author:</label>
                <input
                    type="text"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Cover URL:</label>
                <input
                    type="text"
                    value={cover}
                    onChange={e => setCover(e.target.value)}
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreatePost;
*/




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import './CreatePost.css'; // Import the new CSS file

function CreatePost() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [cover, setCover] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchLoremText();
    }, []);

    const fetchLoremText = () => {
        const url = 'http://localhost:3000/api/fetch-lorem';
        axios.get(url)
            .then(response => {
                setContent(response.data);
            })
            .catch(error => {
                console.error('Error fetching lorem ipsum', error);
                setContent('');
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const postData = { title, author, content, cover };
        try {
            const response = await axios.post('http://localhost:3000/posts', postData);
            console.log('Post created:', response.data);
            navigate('/');
        } catch (error) {
            console.error('Failed to create post', error);
            alert('Failed to create post. Check console for more details.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-post-form">
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Author:</label>
                <input
                    type="text"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Cover URL:</label>
                <input
                    type="text"
                    value={cover}
                    onChange={e => setCover(e.target.value)}
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreatePost;
