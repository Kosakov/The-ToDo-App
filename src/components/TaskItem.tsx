import type TaskItemProps from "../interfaces/TaskItemProps,interface";

export default function TaskItem({
  task,
  deleteTask,
  completeTask,
}: TaskItemProps) {
  return (
<li id={String(task.id)} className="pb-2.5">
  <div className="flex justify-between items-start">
    <span
      className={`flex-1 min-w-0 text-left text-gray-800 text-lg font-medium wrap-break-word ${
        task.completed ? "line-through text-gray-400" : ""
      }`}
    >
      {task.title}
    </span>
    <div className="flex gap-2 ml-4">
      <button
        disabled={task.completed}
        type="button"
        className="rounded-md bg-green-600 py-2 px-4 text-sm text-white shadow-md hover:shadow-lg disabled:opacity-50"
        onClick={() => completeTask(task.id)}
      >
        Done
      </button>
      <button
        type="button"
        className="rounded-md bg-red-600 py-2 px-4 text-sm text-white shadow-md hover:shadow-lg"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  </div>
</li>


  );
}
