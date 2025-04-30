import React, { useState } from "react";

const ChipInputs = () => {
  const [input, setInputs] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if(e.key === 'Enter' && input.trim() !== "") {
        //logic to add chips
        setChips(prev => [...prev, input]);
        setInputs("")
    }
  }

  const handleDelete = (index) => {
    const copyChips = [...chips];
    copyChips.splice(index, 1);
    setChips(copyChips);
  }

  return (
    <div>
      <h1>Chips Inputs</h1>
      <input
        type="text"
        placeholder="Type a chip and enter"
        className="p-4 border border-black"
        value={input}
        onChange={(e) => setInputs(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div>
        {chips.map((chip, index) => (
          <div className="m-1 p-2 bg-amber-200">
            {chip}
            <button className="ml-2 bg-red-400" onClick={() => handleDelete(index)}>X</button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ChipInputs;
