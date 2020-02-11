import React, { useContext, useState, useEffect, useRef } from "react";
//import { Consumer } from "./context/index";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { TaskContext } from "./context/index";
import TaskList from "./TaskList";

const ToDo = styled.span`
  color: purple;
  font-size: 2em;
`;

const Button = styled.button`
  color: ${props => props.theme.main};
  background: purple;
  padding: 1em;
  margin: 10px;
  border-radius: 20px;
  display: inline;
`;

Button.defaultProps = {
  theme: {
    main: "white"
  }
};
export default function Task({ id }) {
  const isInitialMount = useRef(true);
  const context = useContext(TaskContext);
  const theme = {
    main: "pink"
  };
  // const [toggle, setToggle] = useState(false);
    let task = null;

 
          
          for(let i = 0; i<context.tasks.length; i++)  {
        if(context.tasks[i].id === id) {
          task = context.tasks[i];
        }
    }
    console.log(task);
    // useEffect(()=>{
    //   if (isInitialMount.current) {
    //     isInitialMount.current = false;
    //  }
    //   else { context.actions.toggleIsDone(task.id)}
    // },[toggle])
  

  
  if(task===null) {
    console.log("hi")
    return null;
  }
  console.log("rerendered")
  return (
    <div>
      <ToDo>{task.name}</ToDo>
      {console.log(task.name)}
      <ThemeProvider theme={theme}>
        <Button
          onClick={() => {
            return context.actions.removeTask(task.id);
          }}
        >
          X
        </Button>
        <Button
          onClick={() => {
            // setToggle(true)
             return context.actions.toggleIsDone(task.id);
          
          }}
        >
          {task.done.toString()}
        </Button>
      </ThemeProvider>
    </div>
  );
}
