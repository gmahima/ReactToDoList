import { createContext } from "react";

export const TaskContext = createContext(null);
// export function Provider(props) {
//   const [tasks, setTasks] = useState(null);
//   let prevTaskId = 0;
//   const handleAddTask = name => {
//     setTasks([
//       ...tasks,
//       {
//         name,
//         id: (prevTaskId += 1)
//       }
//     ]);
//   };
//   const handleRemoveTask = id => {
//     setTasks(tasks.filter(p => p.id !== id));
//   };

//   return (
//     <TaskContext.Provider
//       value={{
//         tasks: tasks,
//         actions: {
//           addTask: handleAddTask,
//           removeTask: handleRemoveTask
//         }
//       }}
//     >
//       {props.children}
//     </TaskContext.Provider>
//   );
// }
// export { TaskContext };
