import axios from "axios";
import React, { useEffect, useState } from "react";

const AutoComplete = () => {
  const [results, setResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchRecipes = async () => {
    const data = await axios.get(
      "https://dummyjson.com/recipes/search?q=" + searchInput
    );
    setResults(data?.data?.recipes);
  };

  useEffect(() => {
    const optimise = setTimeout(() => {
      if (searchInput.trim()) {
        console.log(searchInput)
        fetchRecipes(searchInput);
      }
    }, 500);

    return () => clearTimeout(optimise);
  }, [searchInput]);

  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <div>
      <h1>Recipes</h1>
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

export default AutoComplete;
