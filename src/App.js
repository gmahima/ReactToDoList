import React from "react";
import styled from "styled-components";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import RadioList from "./components/RadioList";

const TitleText = styled.h1`
  color: white;
  font-size: 3em;
  @media (max-width: 400px) {
    font-size: 2em;
  }
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
  grid-gap: 3em;
  @media(max-width: 400px) {
    grid-gap: 1.5em;
    
  }
`;
const Tasks = styled.div`
  display: grid;
  grid-template-columns: 0.5fr;
  justify-content: center;
  grid-gap: 0.5em;
  @media (max-width: 400px) {
    fgrid-template-columns: 0.1fr;
  }

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
