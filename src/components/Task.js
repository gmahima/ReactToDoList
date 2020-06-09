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
`;

const CloseButton = styled.button`
color: #707070;
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
  background-color: #F0F0F0;
}
`

const CheckLabel = styled.label`
display: grid;
align-content: center;
justify-content: space-around;
padding: 20px;
color: #707070;
cursor: pointer;
grid-template-columns: 1fr;
&:hover {
  border: 6px solid black;
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

        <CheckLabel>
          <CheckInput type="checkbox"
            value={task.id}
            checked={task.checked}
            onChange={handleChange}
          />
          done
        </CheckLabel>
        </ToDoItem>
      </ThemeProvider>
    
  );
}
