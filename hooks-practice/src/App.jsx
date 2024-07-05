import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Hello");
  const [input, setInput] = useState("");
  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleOnClick() {
    setName("Hello " + input);
  }
  return (
    <div className="container">
      <h1>{name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleOnClick}>Submit</button>
    </div>
  );
}

export default App;
