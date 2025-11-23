import type Task from "../interfaces/Task.inteface";
import type { TaskStatus } from "../interfaces/TaskStatus.type";

export function getFilteredTasks(tasks: Task[], filter: TaskStatus | "all"): Task[] {
  if (filter === "all") return tasks;
  let filteredTasks = tasks.filter((task) => {
    return task.status === filter;
  });
  return filteredTasks;
}

export function getItemsFromLocalStorage(key: string) {
  const saved = localStorage.getItem(key);
  if (saved) return JSON.parse(saved);
  return;
}

