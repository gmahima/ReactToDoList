import React from "react";
import { Consumer } from "./context";
import { TextInput, Submit } from "./styled";

export default function AddTaskForm() {
  const taskInput = React.createRef();

  return (
    <Consumer>
      {({ actions }) => {
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
      }}
    </Consumer>
  );
}
