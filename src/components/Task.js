import React, { useContext, useState } from "react";
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
  const context = useContext(TaskContext);
  const theme = {
    main: "pink"
  };
  const handleChange = (e) =>{
    console.log(e.target.value + " " + e.target.checked)
    context.actions.toggleIsDone(e.target.value, e.target.checked)
    console.log(context.anime)
  }
    let task = null;
    for(let i = 0; i<context.tasks.length; i++)  {
        if(context.tasks[i].id === id) {
          task = context.tasks[i];
        }
    }
  

  
  if(task===null) {
    return null;
  }
  return (
    <div>
      <ToDo>{task.name}</ToDo>
      <ThemeProvider theme={theme}>
        <Button
          onClick={() => {
            return context.actions.removeTask(task.id);
          }}
        >
          X
        </Button>
        <label>
          <input type="checkbox"
            value={task.id}
            defaultChecked={task.done}
            onChange={handleChange}
          />
          done
        </label>
      </ThemeProvider>
    </div>
  );
}
