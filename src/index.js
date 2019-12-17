import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Provider } from "./components/context/index";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <TaskList />
      <AddTaskForm />
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
