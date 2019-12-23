import React from "react";
import styled from "styled-components";
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
export default function ToDoList() {
  return (
    <Application className="App">
      <Title>My To Do List</Title>
      <TaskList />
      <AddTaskForm />
    </Application>
  );
}
