import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Provider, Consumer } from "./components/context/index";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { Title } from "./components/styled";
function App() {
  return (
    <div className="App">
      <Title>To Do List</Title>

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
