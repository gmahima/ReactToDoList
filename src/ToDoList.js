import React from "react";
import styled from "styled-components";
import AddTaskForm from "./components/AddTaskForm";
import TasksByStatus from "./components/TasksByStatus";
import TaskList from "./components/TaskList";
import RadioList from "./components/RadioList";

const Title = styled.h1`
  background-color: purple;
  color: pink;
  width: 1000px;
  height: 70px;
  
`;
const Application = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  text-align: center;
  justify-content: space-evenly;

`;
export default function ToDoList() {
  return (
    <Application className="App">
      <Title>My To Do List</Title>
      <RadioList />
      <TaskList />
      <AddTaskForm />
    </Application>
  );
}
