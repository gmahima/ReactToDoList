import React, { useContext } from "react";
import { TaskContext } from "./context/index";
import styled from "styled-components";
const TextInput = styled.input`
  width: 700px;
  height: 30px;
  padding: 12px 20px;
  margin: 8px 3px;
  display: inline-block;
  box-sizing: border-box;
  ::placeholder {
    color: #6c6c6d;
  }
  background-color: white;
  color: #6c6c6d;
`;
const Submit = styled(TextInput)`
  padding: 1px 2px;
  margin: 8px 3px;
  width: 70px;

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
    <form onSubmit={handleSubmit}>
      <TextInput type="text" ref={taskInput} placeholder="enter task" />
      <Submit type="submit" value="add task" />
    </form>
  );
}
