import type { TaskStatus } from "../App";
import type Task from "./Task.inteface";

export default interface TaskListProps {
  filter: TaskStatus | "all";
  tasks: Task[];
  deleteTask: (taskId: number) => void;
  completeTask: (taskId: number) => void;
}
