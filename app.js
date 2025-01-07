import React from "react";
import { createRoot } from "react-dom/client";

const grandchild1 = React.createElement("h1", {}, "I am grandchild 1");
const grandchild2 = React.createElement("h2", {}, "I am grandchild 2");

const child = React.createElement("div", {}, [grandchild1, grandchild2]);
const parent = React.createElement("div", { id: "heading" }, child);

const divRoot = document.getElementById("root");

const root = createRoot(divRoot);
root.render(parent);
