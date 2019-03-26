import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <FirstChildOnly>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </FirstChildOnly>
  );
}
var FirstChildOnly = ({ children }) => {
  var firstchild = React.Children.toArray(children);
  return <div>{firstchild[0]}</div>;
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
