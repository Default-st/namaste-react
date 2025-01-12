import React from "react";
import { createRoot } from "react-dom/client";
import food from "../public/food.png";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const divRoot = document.getElementById("root");
const root = createRoot(divRoot);
root.render(<AppLayout />);
