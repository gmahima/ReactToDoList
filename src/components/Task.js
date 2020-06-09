import React, { useContext} from "react";
//import { Consumer } from "./context/index";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { TaskContext } from "./context/index";

const TaskName = styled.span`
  display: grid;
  align-content: center;
  color: grey;
  font-size: 1em;
`;

const CloseButton = styled.button`
color: grey;
background: none;
border: none;
text-align: center;
text-decoration: none;
font-size: 16px;
cursor: pointer;
align-self: stretch;
justify-self: stretch;
padding: 0 30px;

&:hover {
  border: 6px solid black;
}

`;

const ToDoItem = styled.div`
height: 100%;
background-color: white;
display: grid;
grid-template-columns: auto 1fr auto;
align-items: stretch;
&:hover {
  background-color: #87fff9;
}
`

const CheckLabel = styled.label`
display: grid;
align-content: center;
justify-content: space-around;
padding: 20px;
color: grey;
cursor: pointer;
grid-template-columns: 1fr 1fr;
&:hover {
  border: 6px solid black;
}
`
const CheckInput = styled.input`
color: grey;
background: none;

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
        <CheckLabel>
          <CheckInput type="checkbox"
            value={task.id}
            checked={task.checked}
            onChange={handleChange}
          />
          done
        </CheckLabel>
        <TaskName>{task.name}</TaskName>
        {console.log(task.name)}
        <CloseButton
          onClick={() => {
            return context.actions.removeTask(task.id);
          }}
        >
          &times;
        </CloseButton>
        </ToDoItem>
      </ThemeProvider>
    
  );
}
