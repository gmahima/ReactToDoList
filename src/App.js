import React from "react";
import styled from "styled-components";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import RadioList from "./components/RadioList";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

// const Application = styled.div`
//   font-family: sans-serif;
//   text-align: center;
//   width: 100%;
//   height: 100vh;
//   margin: 0;
//   align-content: start;
//   background-color: black;
//   display: grid;
//   grid-gap: 3em;
//   @media(max-width: 400px) {
//     grid-gap: 1.5em;
    
//   }
// `;
// const TitleText = styled.h1`
//   color: white;
//   font-size: 3em;
//   @media (max-width: 400px) {
//     font-size: 2em;
//   }
// `
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
    <Router>
      <Route path="/">
        <div className="bg-gray-100 grid w-screen h-screen text-center content-start gap-6 md:gap-12">
          <h1 className="text-black text-3xl md:text-5xl font-bold bg-orange py-6">My To Do List</h1>
          <RadioList />
          <Tasks>
            <AddTaskForm />
            <Switch>
              <Route exact path='/' render={() => (<Redirect to='/all' />)}/>
              <Route path='/all'  render={() => (<TaskList show='all' />)}/>
              <Route path='/done' render={() => (<TaskList show='done' />)}/>
              <Route path='/todo' render={() => (<TaskList show='todo' />)}/>
            </Switch> 
          </Tasks>
        </div>
      </Route>
    </Router>
  );
}