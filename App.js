const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child one" }, [
    React.createElement("h1", { id: "heading one" }, "heading one"),
  ]),
  React.createElement(
    "div",
    { id: "child two" },
    React.createElement("h1", { id: "heading two" }, "heading two")
  ),
  React.createElement(
    "div",
    { id: "child three" },
    React.createElement("h1", { id: "heading three" }, "heading three")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);

root.render(parent);
