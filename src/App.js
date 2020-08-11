import React from "react";
import styled from "styled-components";
import tw from 'twin.macro'
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import NavList from "./components/NavList";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

// const Application = styled.div`
//   font-family: sans-serif;
//   text-align: center;
//   width: 100%;
//   height: 100vh;
//   margin: 0;
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
  grid-gap: 2em;
  @media (max-width: 400px) {
    fgrid-template-columns: 0.1fr;
  }

`
const H1 = styled.h1`
${tw`text-black text-3xl md:text-5xl py-6`}
`
const Container = styled.div`
${tw`bg-white grid w-screen h-screen text-center content-start gap-6 md:gap-12`}
`
 export default function ToDoList() {
  return (
    <Router>

        <Container >
          <H1>My To Do List</H1>
          <NavList />
          <Tasks>
            <AddTaskForm />
            <Switch>
              <Route exact path='/' render={() => (<Redirect to='/all' />)}/>
              <Route path='/all'  render={() => (<TaskList show='all' />)}/>
              <Route path='/done' render={() => (<TaskList show='done' />)}/>
              <Route path='/todo' render={() => (<TaskList show='todo' />)}/>
            </Switch> 
          </Tasks>
        </Container>

    </Router>
  );
}