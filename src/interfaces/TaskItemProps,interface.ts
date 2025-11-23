import type Task from "./Task.inteface";

export default interface TaskItemProps {
task: Task,
deleteTask:(taskId: string) => void
completeTask:(taskId: string) => void
}