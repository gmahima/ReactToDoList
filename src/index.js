import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Provider } from "./components/context/index";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const Title = styled.h1`
  background-color: purple;
  color: pink;
  border-radius: 20px;
`;
const Application = styled.div`
  font-family: sans-serif;
  text-align: center;
`;
function App() {
  return (
    <Application className="App">
      <Title>My To Do List</Title>

      <TaskList />
      <AddTaskForm />
    </Application>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement
);
