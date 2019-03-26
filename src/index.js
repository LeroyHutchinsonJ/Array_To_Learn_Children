import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Head number={1}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h3>Good shit</h3>
      </Head>
    </div>
  );
}
var FirstChildOnly = ({ children }) => {
  var childArray = React.Children.toArray(children);
  return <div>{childArray[0]}</div>;
};

var LastChildOnly = ({ children }) => {
  var childArray = React.Children.toArray(children);
  var lastChild = childArray.length - 1;
  return <div>{childArray[lastChild]}</div>;
};

var Head = ({ number, children }) => {
  var childArray = React.Children.toArray(children);

  var firstNumbers = new Array();

  for (var a = 0; a < number; a++) {
    firstNumbers[a] = childArray[a];
  }

  return <div>{firstNumbers}</div>;
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
