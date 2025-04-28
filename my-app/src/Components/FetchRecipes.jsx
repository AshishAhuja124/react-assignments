import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchRecipes = () => {
  const [results, setResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchRecipes = async () => {
    const data = await axios.get(
      "https://dummyjson.com/recipes/search?q=" + searchInput
    );
    console.log(data);
    setResults(data?.data?.recipes);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
        if(searchInput.trim()) {
            fetchRecipes(searchInput);
        }
    }, 300);
    return () => clearTimeout(debounce)
  }, [searchInput]);

  useEffect(() => {
    fetchRecipes();
  }, [])

  return (
    <div>
      <h1>Fetch Recipes</h1>
      <input
        type="text"
        placeholder="Search for recipe..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="border p-2 rounded"
      />
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchRecipes;
