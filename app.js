const grandchild1 = React.createElement("h1", {}, "I am grandchild 1");
const grandchild2 = React.createElement("h2", {}, "I am grandchild 2");

const child = React.createElement("div", {}, [grandchild1, grandchild2]);
const parent = React.createElement("div", { id: "heading" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
