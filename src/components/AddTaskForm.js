import React from "react";
import { Consumer } from "./context";

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
            <input type="text" ref={taskInput} placeholder="enter task" />
            <input type="submit" value="add task" />
          </form>
        );
      }}
    </Consumer>
  );
}
