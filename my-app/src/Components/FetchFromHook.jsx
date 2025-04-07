import React from "react";
import useFetchPosts from "./hooks/useFetchPosts";

const FetchFromHook = () => {
  const { posts, loading, error } = useFetchPosts();

  if (loading) return <div className="p-4">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-500">Error fetching posts.</div>;

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

export default FetchFromHook;
