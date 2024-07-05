import React from "react";

function Input(props) {
  return (
    <div>
      <input type={props.input1} placeholder="Username" />
      <input type={props.input2} placeholder="Password" />
    </div>
  );
}

export default Input;
