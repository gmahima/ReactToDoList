import React from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import TaskList from "./TaskList";
export default function TasksByStatus({ match }) {
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
      <Route exact path={`${match.path}all`} render={() => <TaskList />} />
      <Route
        exact
        path={`${match.path}completed`}
        render={() => <TaskList />}
      />
      <Route exact path={`${match.path}todo`} render={() => <TaskList />} />
    </div>
  );
}
