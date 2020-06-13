import React, { useContext } from "react";
import { TaskContext } from "./context/index";
import styled from "styled-components";
const TextInput = styled.input`
  padding: 1em;
  box-sizing: border-box;
  ::placeholder {
    color: #6c6c6d;
  }
  background-color: white;
  color: #6c6c6d;
  @media(max-width: 400px) {
    padding:0.5em;
    font-size: 0.5em;
    
  }
`;
const TaskForm = styled.form`
text-align: center;
display: grid;
grid-template-columns: 1fr auto;
justify-content: center;
grid-gap: 0.5em;
grid-auto-rows: 3em;
align-content: center;
@media(max-width: 400px) {
  grid-auto-rows: 2em;
  
}

`
const Submit = styled(TextInput)`
text-align: center;
padding: 1em;
cursor: pointer;
&:hover {
  background-color: #F0F0F0;
}
@media(max-width: 400px) {
  padding:0.5em;
  font-size: 0.5em;
  
}
  

`;
export default function AddTaskForm() {
  const taskInput = React.createRef();

  const c = useContext(TaskContext);
  const actions = c.actions;
  const handleSubmit = event => {
    event.preventDefault();
    actions.addTask(taskInput.current.value);
    event.currentTarget.reset();
  };
  return (
    <TaskForm onSubmit={handleSubmit}>
      <TextInput type="text" ref={taskInput} placeholder="enter task" />
      <Submit type="submit" value="add task" />
    </TaskForm>
  );
}
