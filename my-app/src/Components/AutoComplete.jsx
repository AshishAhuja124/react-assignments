import axios from "axios";
import React, { useEffect, useState } from "react";

const AutoComplete = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchRecipes = async () => {
    const data = await axios.get("https://dummyjson.com/recipes/search?q="+ input);
    setResults(data?.data?.recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, [input]);

  return (
    <div className="max-w-md mx-auto mt-10 relative">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        AutoComplete
      </h1>

      <input
        type="text"
        className="border-2 border-gray-300 focus:border-blue-500 rounded-md p-2 w-full outline-none transition-all duration-200"
        placeholder="Search recipes..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {results.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow">
          {results.map((item) => (
            <li key={item.id} className="p-2 cursor-pointer hover:bg-gray-100">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
