import React from "react";
import Input from "./Input";

function Login() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <Input input1="text" input2="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
