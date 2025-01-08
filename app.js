import React from "react";
import { createRoot } from "react-dom/client";

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>Hello from component</h1>
    </div>
  );
};

const Title = () => {
  return <h1>Namaste React</h1>;
};

const divRoot = document.getElementById("root");
const root = createRoot(divRoot);
root.render(<HeadingComponent />);
