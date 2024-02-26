import React from "react";
import logo from "./logo.svg";
import RatingComponent from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppTitle />
        <RatingComponent value={2} />
        <Accordion />
        <RatingComponent value={4} />
      </header>
    </div>
  );
}

const AppTitle = () => {
  return <div style={{ color: "white" }}>This is App component</div>;
};

export default App;
