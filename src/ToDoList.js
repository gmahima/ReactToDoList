import React from "react";
import styled from "styled-components";
import AddTaskForm from "./components/AddTaskForm";
import TasksByStatus from "./components/TasksByStatus";
import TaskList from "./components/TaskList";
import RadioList from "./components/RadioList";

const Title = styled.h1`
  background-color: purple;
  color: pink;
  border-radius: 20px;
`;
const Application = styled.div`
  font-family: sans-serif;
  text-align: center;
`;
export default function ToDoList({ match }) {
  return (
    <Application className="App">
      <Title>My To Do List</Title>
      <RadioList />
      <TaskList />
      <AddTaskForm />
    </Application>
  );
}
