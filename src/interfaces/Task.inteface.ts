import type { TaskStatus } from "./TaskStatus.type";

export default interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}
