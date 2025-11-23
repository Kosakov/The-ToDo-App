import type Task from "./Task.inteface";
import type { TaskStatus } from "./TaskStatus.type";

export default interface TaskListProps {
  filter: TaskStatus | "all";
  tasks: Task[];
  deleteTask: (taskId: string) => void;
  completeTask: (taskId: string) => void;
}
