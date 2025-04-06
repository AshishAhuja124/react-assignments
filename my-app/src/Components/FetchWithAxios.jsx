import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchWithAxios = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      console.log(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border text-center">{post.id}</td>
              <td className="py-2 px-4 border">{post.title}</td>
              <td className="py-2 px-4 border">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchWithAxios;
    