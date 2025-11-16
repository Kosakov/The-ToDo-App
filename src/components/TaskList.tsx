import type Task from "../interfaces/Task.inteface";
import type TaskProps from "../interfaces/taskProps.interface";

export default function TaskList({tasks}:TaskProps){
    return (
    <>
      <h1>List</h1>
      <ol>
        {tasks.map((task: Task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ol>
    </>
  );
}