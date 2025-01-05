const container = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement(
        "p",
        { key: 2 },
        "Welcome to the React documentation!"
      ),
      React.createElement("img", {
        key: 2,
        style: { width: 200, backgroundColor: "teal" },
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      }),
    ]),
    React.createElement("section", { key: 1 }, [
      React.createElement("form", { key: 2 }, [
        React.createElement("div", {className: 'input-group'}, [
          React.createElement(
            "label",
            { key: 3, htmlFor: "userName" },
            "UserName"
          ),
          React.createElement("input", { key: 3, id: "userName" }),
        ]),
        React.createElement("div", {className: 'input-group'}, [
          React.createElement(
            "label",
            { key: 3, htmlFor: "password" },
            "Password"
          ),
          React.createElement("input", { key: 3, id: "password",  type: 'password' }),
        ]),
      ]),
    ]),
  ]
);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);
