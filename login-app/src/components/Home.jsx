import React from "react";
import "../styles/Home.css";
import Login from "./Login";

var isLogged = 14;

const currentTime = new Date().getHours();

function Home() {
  return (
    <div>
      {currentTime <= isLogged ? <Login /> : <h1>What are you doing here?</h1>}
    </div>
  );
}

export default Home;
