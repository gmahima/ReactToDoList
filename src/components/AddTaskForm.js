import React, { useContext } from "react";
import { TaskContext } from "./context/index";
import styled from "styled-components";
const TextInput = styled.input`
  width: 30%;
  padding: 12px 20px;
  margin: 8px 3px;
  display: inline-block;
  box-sizing: border-box;
  ::placeholder {
    color: pink;
  }
  border-radius: 20px;
  background-color: purple;
  color: pink;
`;
const Submit = styled(TextInput)`
  padding: 1px 2px;
  margin: 8px 3px;
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
