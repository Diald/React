import React from "react";
import { useState } from "react";
import "../styles/Todo.css";

function Todo() {
  const [count, setcount] = useState(10);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setcount(count - 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Todo;
