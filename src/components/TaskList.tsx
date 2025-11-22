import type Task from "../interfaces/Task.inteface";
import type TaskListProps from "../interfaces/TaskListProps.interface";
import TaskItem from "./TaskItem";

export default function TaskList({
  filter,
  tasks,
  deleteTask,
  completeTask,
}: TaskListProps) {
  return (
    <>
      <h3 className="font-medium">ToDo's:</h3>
      <ol>
        {tasks
          .filter((task) => {
            if (filter == "all") {
              return task;
            }
            return task.status == filter;
          })
          .map((task: Task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            ></TaskItem>
          ))}
      </ol>
    </>
  );
}
