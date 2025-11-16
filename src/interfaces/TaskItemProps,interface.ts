import type Task from "./Task.inteface";

export default interface TaskItemProps {
task: Task,
deleteTask:(taskId: number) => void
completeTask:(taskId: number) => void
}