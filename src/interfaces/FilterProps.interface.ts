import type { TaskStatus } from "./TaskStatus.type";

export default interface FilterProps {
  filterTasks: (value: TaskStatus | "all") => void;
}
