import React from "react";
import logo from "./logo.svg";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppTitle />
        <Rating value={2} />
        {/* <Accordion titleValue={"Menu"} />
        <Accordion titleValue={"Users"} /> */}
        <Rating value={4} />
        <Rating value={1} />
        <Rating value={5} />
      </header>
    </div>
  );
}

const AppTitle = () => {
  return <div style={{ color: "white" }}>This is App component</div>;
};

export default App;
