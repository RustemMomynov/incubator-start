import React, { FC } from "react";
import logo from "./logo.svg";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageTitle title={"Заголовок страницы"} />
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

interface PageTitleTypes {
  title: string;
}

const PageTitle: FC<PageTitleTypes> = ({ title }) => {
  return <h1 style={{ color: "white" }}>{title}</h1>;
};

export default App;
