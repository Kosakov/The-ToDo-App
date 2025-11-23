import type FilterProps from "../interfaces/FilterProps.interface";
import type { TaskStatus } from "../interfaces/TaskStatus.type";

export default function TaskFilter({ filterTasks }: FilterProps) {
  return (
    <>
      <select
        className="mt-4 mb-4"
        name="filterTasks"
        onChange={(e) => {
          filterTasks(e.target.value as TaskStatus | "all");
        }}
        defaultValue="all"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </>
  );
}
