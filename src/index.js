import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Provider } from "./components/context/index";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement
);
