import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./styles.css";
import { Provider, Consumer } from "./components/context/index";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
//import { Title } from "./components/styled";
const Title = styled.h1`
  background-color: purple;
  color: pink;
  border-radius: 20px;
`;
function App() {
  return (
    <div className="App">
      <Title>My To Do List</Title>

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
