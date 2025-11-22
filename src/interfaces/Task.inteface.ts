import type { TaskStatus } from "../App";

export default interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}
