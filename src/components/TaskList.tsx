import type Task from "../interfaces/Task.inteface";
import type TaskListProps from "../interfaces/TaskListProps.interface";
import {getFilteredTasks} from "../Utils/Utils";
import TaskItem from "./TaskItem";

export default function TaskList({
  filter,
  tasks,
  deleteTask,
  completeTask,
}: TaskListProps) {
  let taskItems = getFilteredTasks(tasks, filter).map((task: Task) => (
    <TaskItem
      key={task.id}
      task={task}
      deleteTask={deleteTask}
      completeTask={completeTask}
    ></TaskItem>
  ));
  return (
    <>
      <h3 className="font-medium">ToDo's:</h3>
      <ol>{taskItems}</ol>
    </>
  );
}
