import React from "react";
import "../styles/Note.css";

function Note(props) {
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default Note;
