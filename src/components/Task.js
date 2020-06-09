import React, { useContext} from "react";
//import { Consumer } from "./context/index";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { TaskContext } from "./context/index";

const TaskName = styled.span`
  color: grey;
  font-size: 1em;
`;

const CloseButton = styled.button`
background-color: ${props => props.theme.main};
display: inline;
border: none;
text-align: center;
text-decoration: none;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
&:hover {
  border: 1px solid black;
}

`;

const ToDoItem = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid black;
background-color: white;
width: 70%;

align-items: center;
&:hover {
  border: 1px solid black;
}
`


CloseButton.defaultProps = {
  theme: {
    main: "white"
  }
};
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
    console.log("hi")
    return null;
  }
  console.log("rerendered")
  return (
    <ToDoItem>
      <ThemeProvider theme={theme}>
        <label>
          <input type="checkbox"
            value={task.id}
            checked={task.checked}
            onChange={handleChange}
          />
          done
        </label>
        <TaskName>{task.name}</TaskName>
        {console.log(task.name)}
        <CloseButton
          onClick={() => {
            return context.actions.removeTask(task.id);
          }}
        >
          &times;
        </CloseButton>
        
      </ThemeProvider>
    </ToDoItem>
  );
}
