import type { TaskStatus } from "../App";

export default interface FilterProps {
  filterTasks: (value: TaskStatus | "all") => void;
}
