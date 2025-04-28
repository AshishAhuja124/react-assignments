import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPost, setSearchPost] = useState("");
  const [error, setError] = useState(null);


  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchPost(e.target.value);
  };

  const filterPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchPost.toLowerCase())
  );

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-500">Error fetching posts.</div>;

  return (
    <div>
      <h1>Fetching posts</h1>
      <input
        type="text"
        placeholder="search post..."
        value={searchPost}
        onChange={handleSearch}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {filterPosts.map((post) => (
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
