import React, { useContext, useState } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import TaskList from "./TaskList";
import { TaskContext } from "./context/index";
export default function TasksByStatus({ match }) {
  const context = useContext(TaskContext);
  //const allTasks = context.tasks;
  // const [doneTasks, setDoneTasks] = useState([]);
  // const [todoTasks, setTodoTasks] = useState([]);
  
  return (
    <div>
      <ul>
        <li>
          <NavLink to={`${match.url}all`}>all</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}completed`}>completed</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}todo`}>To Do</NavLink>
        </li>
      </ul>
      <Route
        exact
        path={match.path}
        render={() => <Redirect to={`${match.url}all`} />}
      />
      <Route
        exact
        path={`${match.path}all`}
        render={() => <TaskList tasks={context.tasks} />}
      />
      <Route
        exact
        path={`${match.path}completed`}
        render={() => <TaskList tasks={context.tasks.filter(task => task.done === true)} />}
      />
      <Route
        exact
        path={`${match.path}todo`}
        render={() => <TaskList tasks={context.tasks.filter(task => task.done === true)} />}
      />
    </div>
  );
}
