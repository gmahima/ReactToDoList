import React from "react";
import styled from "styled-components";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import RadioList from "./components/RadioList";

const TitleText = styled.h1`
  color: #87fff9;
  font-size: 6em;
`

const Application = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  align-content: center;
  background-color: black;
  display: grid;
`;
export default function ToDoList() {
  return (
    <Application className="App">
      <TitleText>My To Do List</TitleText>
      <RadioList />
      <TaskList />
      <AddTaskForm />
    </Application>
  );
}
