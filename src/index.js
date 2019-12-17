import React from "react";
import ReactDOM from "react-dom";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskList />
      <TaskInput />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
