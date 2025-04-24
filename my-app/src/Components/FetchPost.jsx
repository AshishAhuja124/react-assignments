import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FetchPost = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPosts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Filter posts by title based on the search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Posts from API</h1>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px' }}
      />

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchPost;
