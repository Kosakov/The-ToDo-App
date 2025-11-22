import type { TaskStatus } from "../App";
import type FilterProps from "../interfaces/FilterProps.interface";

export default function Filter({ filterTasks }: FilterProps) {
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
