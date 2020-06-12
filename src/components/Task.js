import React, { useContext} from "react";
//import { Consumer } from "./context/index";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { TaskContext } from "./context/index";

const TaskName = styled.span`
  display: grid;
  align-content: center;
  color: #707070;
  font-size: 1em;
  text-decoration: ${({checked}) =>  (checked? 'line-through': 'none')};
  @media(max-width: 400px) {
    font-size: 0.7em;
    
  }
`;

const CloseButton = styled.button`
color: white;
background: black;
border: 1px solid white;
text-align: center;
text-decoration: none;
font-size: 1em;
cursor: pointer;
align-self: stretch;
justify-self: stretch;
padding: 0 2em;

&:hover {
  background: #707070;

}
@media(max-width: 400px) {
  padding:0 1em;
  font-size: 0.5em;
  
}

`;

const ToDoItem = styled.div`
height: 100%;
background-color: white;
display: grid;
grid-template-columns: auto 1fr auto;
align-items: stretch;
&:hover {
  background-color: #F0F0F0;
}
`

const CheckLabel = styled.label`
background:black;
color:white;
border: 1px solid white;
display: grid;
align-content: center;
justify-content: space-around;
padding: 1em;
cursor: pointer;
grid-template-columns: 1fr;
&:hover {
  background: #707070;

}
@media(max-width: 400px) {
  padding:0.5em;
  font-size: 0.5em;
  
}
`
const CheckInput = styled.input`
color: #707070;
background: none;
display: none;

`
export default function Task({ id }) {
  const context = useContext(TaskContext);
  const theme = {
    main: "white"
  };
  const handleChange = (e) =>{
    console.log(e.target.value + " " + e.target.checked)
    context.actions.toggleIsDone(e.target.value, e.target.checked)
    console.log(context.tasks)
  }
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
    return null;
  }
  return (
    
      <ThemeProvider theme={theme}>
        <ToDoItem>
        <CloseButton
          onClick={() => {
            return context.actions.removeTask(task.id);
          }}
        >
          &times;
        </CloseButton>
        <TaskName checked={task.checked}>{task.name}</TaskName>
        {console.log(task.name)}

        <CheckLabel checked={task.checked}>
          <CheckInput type="checkbox"
            value={task.id}
            checked={task.checked}
            onChange={handleChange}
          />
          {task.checked? 'undo': 'done'}
        </CheckLabel>
        </ToDoItem>
      </ThemeProvider>
    
  );
}
