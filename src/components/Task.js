import React, { useContext} from "react";
//import { Consumer } from "./context/index";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { TaskContext } from "./context/index";

const TaskName = styled.span`
  margin: 0 0.05em;
  display: grid;
  align-content: center;
  font-weight: bold;
  font-size: 1em;
  text-decoration: ${({checked}) =>  (checked? 'line-through': 'none')};
  @media(max-width: 400px) {
    font-size: 0.7em;
    
  }
`;

const CloseButton = styled.button`
cursor: pointer;
align-self: stretch;
justify-self: stretch;
`;

const ToDoItem = styled.div`
height: 100%;
display: grid;
grid-template-columns: auto 1fr auto;
align-items: stretch;
`

const CheckLabel = styled.label`
display: grid;
align-content: center;
justify-content: space-around;
padding: 1em;
cursor: pointer;
grid-template-columns: 1fr;
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
    
        <ToDoItem className="bg-pink hover:bg-opacity-75 rounded px-1 py-1">
        <CloseButton className="text-center rounded sm:text-base text-xs py-0 sm:px-8 px-4 bg-lemon-300 text-gray-600 hover:bg-opacity-75"
          onClick={() => {
            return context.actions.removeTask(task.id);
          }}
        >
          &times;
        </CloseButton>
        <TaskName checked={task.checked} className="text-gray-700">{task.name}</TaskName>
        {console.log(task.name)}

        <CheckLabel checked={task.checked} className="text-center rounded sm:text-base text-xs py-0 sm:p-4 p-2 bg-cream text-gray-600 hover:bg-opacity-75">
          <CheckInput type="checkbox"
            value={task.id}
            checked={task.checked}
            onChange={handleChange}
          />
          {task.checked? 'undo': 'done'}
        </CheckLabel>
        </ToDoItem>

    
  );
}
