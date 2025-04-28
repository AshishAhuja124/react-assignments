import axios from "axios";
import React, { useEffect, useState } from "react";

const AutoComplete = () => {
  const [results, setResults] = useState([]);
  const [seachInput, setSearchInput] = useState("");

  const fetchRecipes = async () => {
    const data = await axios.get(
      "https://dummyjson.com/recipes/search?q=" + seachInput
    );
    setResults(data?.data?.recipes);
  };

  useEffect(() => {
    const optimise = setTimeout(() => {
      if(seachInput.trim()) {
        fetchRecipes();

      }
    }, 500);

    return () => clearInterval(optimise)
   
  }, [seachInput]);

  return (
    <div>
      <h1>Recipes</h1>

      <input
        type="text"
        placeholder="Search for recipe..."
        value={seachInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="border p-2 rounded"
      />
      <ul>
        {results.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
