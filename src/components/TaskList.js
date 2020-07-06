
import React, {useContext} from "react";
import Task from "./Task";
import styled from "styled-components";
import { TaskContext } from "./context/index";



export default function TaskList({show}) {
  const context = useContext(TaskContext);

  let myTasks = context.tasks;
    if(show === 'all'){
        myTasks = context.tasks;
    }
    else if(show === 'done'){
        myTasks = context.tasks.filter((a) => a.checked === true)
    }
    else {
        myTasks = context.tasks.filter((a) => a.checked === false)
    }

  const taskList = myTasks.map((task) => (

    <li><Task id={task.id} key={task.id.toString()} /></li>
  ));
  return (

        <TaskUl className="shadow-lg rounded border  md:px-10 px-0 py-1 min-h-1 md:min-h-5"> 
          {
            taskList
          }
        </TaskUl>


  );
}
const TaskUl = styled.ul`
align-items: start;
align-content:start;
list-style: none;
display: grid;
grid-template-columns: 1fr;
grid-auto-rows: auto
grid-gap: 1px;
margin: 0;


`