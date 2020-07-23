import React, { useContext } from "react";
import { TaskContext } from "./context/index";
import styled from "styled-components";
import tw from 'twin.macro'
const TextInput = styled.input`
${tw `text-xs
p-2 rounded bg-white placeholder-gray-600 box-border sm:text-base sm:p-4
 text-black shadow-sm border
 hover:bg-gray-200 
 focus:bg-gray-100`}
`;
const TaskForm = styled.form`
text-align: center;
display: grid;
grid-template-columns: 1fr auto;
justify-content: center;
grid-gap: 0.5em;
grid-auto-rows: 4em;
align-content: center;
@media(max-width: 400px) {
  grid-auto-rows: 2em;
  
}

`
const Submit = styled(TextInput)`
${tw`text-xs p-2 rounded box-border sm:px-10 sm:text-base text-gray-600 bg-white  text-center shadow-sm border 
hover:bg-gray-100 
focus:bg-opacity-50`}

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
      <TextInput type="text" ref={taskInput} placeholder="enter task"/>
      <Submit type="submit" value="add task"/>
    </TaskForm>
  );
}
