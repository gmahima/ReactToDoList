import React, { useContext } from "react";
import { TaskContext } from "./context/index";
import styled from "styled-components";
const TextInput = styled.input`
  padding: 20px;
  box-sizing: border-box;
  ::placeholder {
    color: #6c6c6d;
  }
  background-color: white;
  color: #6c6c6d;
`;
const TaskForm = styled.form`
text-align: center;
display: grid;
grid-template-columns: 0.5fr auto;
justify-content: center;
grid-gap: 20px;
grid-auto-rows: 50px;

`
const Submit = styled(TextInput)`
text-align: center;
padding: 15px;
  

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
