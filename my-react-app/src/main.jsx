import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

ReactDOM.render(
  <>
    <Header />
    {notes.map((no) => {
      return <Note key={no.id} title={no.title} description={no.content} />;
    })}
    <Footer />
  </>,
  document.getElementById("root")
);
