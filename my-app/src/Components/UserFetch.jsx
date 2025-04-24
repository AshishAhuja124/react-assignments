import axios from "axios";
import React, { useEffect, useState } from "react";

const UserFetch = () => {
  const [post, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

console.log(post)

const filterPost = post.filter((p) => {
    console.log(p.id)
    // p.id > 
})

  return (
    <div>
      <table>
        <thead>
          <th>Id</th>
          <th>Title</th>
        </thead>
        <tbody>
          {post.map((p) => (
            <>
              <td>{p.id}</td>
              <td>{p.title}</td>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserFetch;
