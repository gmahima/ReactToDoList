import React from "react";
import styled from "styled-components";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import RadioList from "./components/RadioList";

const TitleText = styled.h1`
  color: white;
  font-size: 3em;
`

const Application = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  align-content: start;
  background-color: black;
  display: grid;
  grid-gap: 50px;
`;
const Tasks = styled.div`
  display: grid;
  grid-template-columns: 0.5fr;
  justify-content: center;
  grid-gap: 40px;

`
export default function ToDoList() {
  return (
    <Application className="App">
      <TitleText>My To Do List</TitleText>
      <RadioList />
      <Tasks>
        <AddTaskForm />
        <TaskList />   
      </Tasks>
    </Application>
  );
}
